var LinkedList = {
    list: [],

    _findInsertIndex(value) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].value >= value) {
                return i;
            }
        }
        return this.list.length;
    },

    push(value) {
        if (this.list.length > 0 && value < this.list[this.list.length - 1].value) {
            console.log("Value is less than the last element. Cannot push.");
            return;
        }

        const insertIndex = this._findInsertIndex(value);

        if (insertIndex < this.list.length && this.list[insertIndex].value === value) {
            console.log("Value already exists");
            return;
        }

        this.list.splice(insertIndex, 0, { value });
    },

    unshift(value) {
        if (this.list.length > 0 && value > this.list[0].value) {
            console.log("Value is greater than the first element. Cannot unshift.");
            return;
        }

        if (this.list.length > 0 && value >= this.list[0].value) {
            console.log("Value already exists");
            return;
        }

        for (let i = this.list.length; i > 0; i--) {
            this.list[i] = this.list[i - 1];
        }

        this.list[0] = { value };
    },

    shift() {
        if (this.list.length === 0) {
            console.log("List is empty");
            return null;
        }

        const firstElement = this.list[0];

        for (let i = 0; i < this.list.length - 1; i++) {
            this.list[i] = this.list[i + 1];
        }

        this.list.length--;

        return firstElement;
    },

    addByVal(value) {
        if (this.list.some(item => item.value === value)) {
            console.log("Value already exists");
            return;
        }

        const insertIndex = this._findInsertIndex(value);
        this.list.splice(insertIndex, 0, { value });
    },

    removeByVal(value) {
        const index = this.list.findIndex(item => item.value === value);
        if (index === -1) {
            console.log("Value not found");
            return;
        }
        this.list.splice(index, 1);
    },

    display() {
        return this.list.map(item => item.value);
    },

    pop() {
        if (this.list.length === 0) {
            console.log("List is empty");
            return null;
        }

        const lastElement = this.list[this.list.length - 1];
        this.list.length--;

        return lastElement;
    }
};

// LinkedList.push(1);
// LinkedList.push(2);
// LinkedList.push(3);
// console.log(LinkedList.display()); // [1, 2, 3]
// LinkedList.unshift(0);
// console.log(LinkedList.display()); // [0, 1, 2, 3]
// LinkedList.unshift(-1);
// console.log(LinkedList.display()); // [-1, 0, 1, 2, 3]
// LinkedList.shift();
// console.log(LinkedList.display()); // [0, 1, 2, 3]
// LinkedList.shift();
// console.log(LinkedList.display()); // [1, 2, 3]
// LinkedList.shift();
// console.log(LinkedList.display()); // [2, 3]
// LinkedList.unshift(5); // Value is greater than the first element. Cannot unshift.
// console.log(LinkedList.display()); // [2, 3]
// LinkedList.unshift(1);
// console.log(LinkedList.display()); // [1, 2, 3]
// LinkedList.addByVal(1);
// console.log(LinkedList.display()); // [1, 2, 3]
// LinkedList.addByVal(4);
// console.log(LinkedList.display()); // [1, 2, 3, 4]
// LinkedList.removeByVal(3)
// console.log(LinkedList.display()); // [1, 2, 4]
// LinkedList.pop();
// console.log(LinkedList.display()); // [1, 2]
// LinkedList.addByVal(3);
// console.log(LinkedList.display()); // [1, 2, 3]
// LinkedList.push(4);
// console.log(LinkedList.display()); // [1, 2, 3, 4]
// LinkedList.push(5); 
// console.log(LinkedList.display()); // [1, 2, 3, 4 ,5]
// LinkedList.push(3);
