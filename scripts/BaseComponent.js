class BaseComponent {
    constructor() {
        if (this.constructor === BaseComponent) {
            throw new Error('Cannot instantiate an abstract class BaseComponent')
        }
    }

    getProxyState(initialState) {
        return new Proxy(initialState, {
            get: (target,  prop) => {
                return target[prop];
            },
            set: (target, prop, newValue) => {
                const oldValue = target[prop];

                target[prop] = newValue;

                if (newValue !== oldValue) {
                    this.updateUI();
                }

                this.updateUI()

                return true
            },
        })
    }

    updateUI() {
        throw new Error('UpdateUI method must be implemented.')
    }
}

export default BaseComponent