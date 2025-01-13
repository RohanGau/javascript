// simple Factory

class Button {
  constructor(label) {
    this.label = label;
  }
  render() {
    console.log(`Rendering a Button with label: ${this.label}`);
  }
}

class Dropdown {
  constructor(options) {
    this.options = options;
  }
  render() {
    console.log(`Rendering a Dropdown with options: ${this.options}`);
  }
}

class UIComponentFactory {
  static createComponent(type, config) {
    switch (type) {
      case 'button':
        return new Button(config.label);
      case 'dropdown':
        return new Dropdown(config.options);
      default:
        throw new Error(`Unknown component type: ${type}`);
    }
  }
}

// Usage
const button = UIComponentFactory.createComponent('button', { label: 'Click Me' });
button.render(); // Rendering a Button with label: Click Me

const dropdown = UIComponentFactory.createComponent('dropdown', { options: ['Option 1', 'Option 2'] });
dropdown.render(); // Rendering a Dropdown with options: Option 1,Option 2


// factory method

class Component {
  render() {
    throw new Error('Render method should be implemented by subclasses');
  }
}

class Button extends Component {
  render() {
    console.log('Rendering Button...');
  }
}

class Dropdown extends Component {
  render() {
    console.log('Rendering Dropdown...');
  }
}

class ComponentFactory {
  createComponent() {
    throw new Error('createComponent should be implemented by subclasses');
  }
}

class ButtonFactory extends ComponentFactory {
  createComponent() {
    return new Button();
  }
}

class DropdownFactory extends ComponentFactory {
  createComponent() {
    return new Dropdown();
  }
}

// Usage
const buttonFactory = new ButtonFactory();
const button = buttonFactory.createComponent();
button.render(); // Rendering Button...

const dropdownFactory = new DropdownFactory();
const dropdown = dropdownFactory.createComponent();
dropdown.render(); // Rendering Dropdown...


// abstract factory


class DarkButton {
  render() {
    console.log('Rendering a dark-themed button');
  }
}

class LightButton {
  render() {
    console.log('Rendering a light-themed button');
  }
}

class DarkThemeFactory {
  createButton() {
    return new DarkButton();
  }
}

class LightThemeFactory {
  createButton() {
    return new LightButton();
  }
}

// Usage
function getThemeFactory(theme) {
  switch (theme) {
    case 'dark':
      return new DarkThemeFactory();
    case 'light':
      return new LightThemeFactory();
    default:
      throw new Error(`Unknown theme: ${theme}`);
  }
}

const themeFactory = getThemeFactory('dark');
const button = themeFactory.createButton();
button.render(); // Rendering a dark-themed button

