import hoistStatics from './hoistStatics';
import React, { Component } from 'medivh';

import Subscription from '../utils/Subscription';

let hotReloadingVersion = 0;
function noop() {}
function makeUpdater(sourceSelector, store) {
  return function updater(props, prevState) {
    try {
      const nextProps = sourceSelector(store.getState(), props);
      if (nextProps !== prevState.props || prevState.error) {
        return {
          shouldComponentUpdate: true,
          props: nextProps,
          error: null,
        };
      }
      return {
        shouldComponentUpdate: false,
      };
    } catch (error) {
      return {
        shouldComponentUpdate: true,
        error,
      };
    }
  };
}

export default function connectAdvanced(
  selectorFactory,
  {
    renderCountProp = undefined,
    shouldHandleStateChanges = true,
    storeKey = 'store',
    // additional options are passed through to the selectorFactory
    ...connectOptions
  } = {}
) {
  const subscriptionKey = storeKey + 'Subscription';
  const version = hotReloadingVersion++;

  function getDerivedStateFromProps(nextProps, prevState) {
    return prevState.updater(nextProps, prevState);
  }

  return function wrapWithConnect(WrappedComponent) {

    const selectorFactoryOptions = {
      ...connectOptions,
      renderCountProp,
      shouldHandleStateChanges,
      storeKey,
      WrappedComponent
    };

    class Connect extends Component {
      constructor(props, context) {
        super(props, context);

        this.version = version;
        this.renderCount = 0;
        this.store = props[storeKey] || context[storeKey];
        this.propsMode = Boolean(props[storeKey]);
        this.setWrappedInstance = this.setWrappedInstance.bind(this);
        this.state = {
          updater: this.createUpdater(),
          props: {
            dispatch: this.store.dispatch
          }
        };
        this.initSubscription();
        this.runUpdater();
      }

      getChildContext() {
        const subscription = this.propsMode ? null : this.subscription;
        return { [subscriptionKey]: subscription || this.context[subscriptionKey] };
      }

      componentDidMount() {
        if (!shouldHandleStateChanges) return;
        this.subscription.trySubscribe();
        // this.runUpdater()
      }

      shouldComponentUpdate(_, nextState) {
        return nextState.shouldComponentUpdate;
      }

      componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.isUnmounted = true;
      }

      getWrappedInstance() {
        return this.wrappedInstance;
      }

      setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      }

      createUpdater() {
        const sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        return makeUpdater(sourceSelector, this.store);
      }

      runUpdater(callback = noop) {
        if (this.isUnmounted) {
          return;
        }
        this.setState(prevState => prevState.updater(this.props, prevState), callback);
      }

      initSubscription() {
        if (!shouldHandleStateChanges) return;
        const parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this));
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      }

      onStateChange() {
        this.runUpdater(this.notifyNestedSubs);
      }

      isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      }

      addExtraProps(props) {
        if (!renderCountProp && !(this.propsMode && this.subscription)) return props;
        const withExtras = { ...props };
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      }

      render() {
        if (this.state.error) {
          throw this.state.error;
        } else {
          return React.createElement(WrappedComponent, this.addExtraProps(this.state.props));
        }
      }
    }

    Connect.WrappedComponent = WrappedComponent;
    Connect.getDerivedStateFromProps = getDerivedStateFromProps;

    if (process.env.NODE_ENV !== 'production') {
      Connect.prototype.componentDidUpdate = function componentDidUpdate() {
        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          let oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(listener => this.subscription.listeners.subscribe(listener));
          }

          const updater = this.createUpdater();
          this.setState({updater});
          this.runUpdater();
        }
      };
    }


    return hoistStatics(Connect, WrappedComponent);
  };
}