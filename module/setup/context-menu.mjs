export class OutgunnedContextMenu extends foundry.applications.ux.ContextMenu.implementation
{
  constructor(element, selector, menuItems, options = {}) {
    // @TODO: Deprecated in v15
    options.jQuery ??= true;
    super(element, selector, menuItems, options);
  }
  
    /** @inheritdoc */
  static create(app, element, selector, items, { hookName = "EntryContext", ...options } = {}) {
    // @TODO: eprecated in v15
    options.jQuery ??= true;
    options.fixed ??= true;
    app._callHooks?.(className => `get${className}${hookName}`, items);
    return new this(element, selector, items, options);
  }

}