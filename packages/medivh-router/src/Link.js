import React from 'medivh';
import invariant from 'invariant';
import { createLocation } from 'history';

const isModifiedEvent = event =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

/**
 * The public API for rendering a history-aware <a>.
 */
class Link extends React.Component {

  static defaultProps = {
    replace: false
  };


  handleClick = event => {
    if (this.props.onClick) this.props.onClick(event);
    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {

      const { history } = this.context.router;
      const { replace, to } = this.props;
      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }
    }
  };

  render() {
    const { replace, to, ...props } = this.props; // eslint-disable-line no-unused-vars

    invariant(
      this.context.router,
      'You should not use <Link> outside a <Router>'
    );

    invariant(to !== undefined, 'You must specify the "to" property');

    const { history } = this.context.router;
    const location =
      typeof to === 'string'
        ? createLocation(to, null, null, history.location)
        : to;

    let href = 'javascript:void(0)';
    if (history.sync) {
      href = history.createHref(location);
    }
    return (
      <a {...props} onClick={this.handleClick} href={href} />
    );
  }
}

export default Link;
