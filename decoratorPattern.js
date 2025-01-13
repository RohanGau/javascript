// Basic Example

function Button(label) {
  this.label = label;
  this.click = function () {
    console.log(`${this.label} button clicked`);
  };
}

// Decorator to add logging
function withLogging(button) {
  const originalClick = button.click;
  button.click = function () {
    console.log('Logging: Button is about to be clicked.');
    originalClick.call(this); // Call the original method
  };
  return button;
}

// Usage
let myButton = new Button('Submit');
myButton = withLogging(myButton);

myButton.click();
// Output:
// Logging: Button is about to be clicked.
// Submit button clicked


// ES6 Class Example

class Button {
  constructor(label) {
    this.label = label;
  }

  click() {
    console.log(`${this.label} button clicked`);
  }
}

// Decorator
function withAnalytics(button) {
  const originalClick = button.click;
  button.click = function () {
    console.log('Analytics: Event tracked.');
    originalClick.call(this);
  };
  return button;
}

// Usage
let myButton = new Button('Download');
myButton = withAnalytics(myButton);

myButton.click();
// Output:
// Analytics: Event tracked.
// Download button clicked


// frontend perspective use case
// HOCs wrap a component and add functionality to it, such as injecting props, applying themes, or handling errors.
const withLogging = (WrappedComponent) => (props) => {
  console.log(`Rendering ${WrappedComponent.name}`);
  return <WrappedComponent {...props} />;
};

const Button = (props) => <button>{props.label}</button>;

const LoggedButton = withLogging(Button);

// Usage
<LoggedButton label="Submit" />;
