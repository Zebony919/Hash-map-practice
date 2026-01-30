export class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.nextPointer) {
            current =  current.nextPointer;
        }

        current.nextPointer = newNode;
    }


    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }


    size() {
        let count = 0;
        let current = this.head;

        while (current) {
            current =  current.nextPointer;
            count++;
        }

        return count;
    }


    head() {
        if (this.head === null) {
            return undefined;
        }
        return this.head;
    }


    tail() {
        if (this.head === null) {
            return undefined;
        }


        let current = this.head;

        while (current.nextPointer) {
            current =  current.nextPointer;
        }

        return current;
    }


    at(index) {
        if (this.head === null) {
            return undefined;
        }

        let current = this.head;

        for (let i = 0; i < index; i++) {
            if (current === null) {
                return undefined;
            }
            current = current.nextPointer;
        }

        return current;
    }


    pop() {
        if (this.head === null) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.nextPointer;

        return value;
    }


    contains(value) {
        if (this.head === null) {
            return false;
        }

        let current = this.head;

        while (current.nextPointer) {
            if (current.value === value) {
                return true;
            }
            current = current.nextPointer;
        }

        return false;
    }


    findIndex(value) {
        let index = 0;

        if (this.head === null) {
            return -1;
        }

        let current = this.head;

        while (current.nextPointer) {
            if (current.value === value) {
                return index;
            }
            current.nextPointer;
            index++;
        }

        return -1;
    }


    toString() {
        let stringRep = ""

        if (this.head === null) {
            return "";
        }

        let current = this.head;

        while (current.nextPointer) {
            stringRep += "(" + String(current.value) + ") -> ";
            current = current.nextPointer;
        }

        stringRep += "(" + String(current.value) + ") -> null"
        return stringRep;
    }
    

    insertAt(index, ...values) {
        if (index < 0 || index > this.size()) {
            throw RangeError;
        }

        let current = this.head;
        
        for (let i = 1; i < index; i++) {
            current = current.nextPointer;
        }

        const cutOffBit = current.nextPointer;

        for (const value of values) {
            const newNode = new Node(value);
            current.nextPointer = newNode;
            current = newNode;
        }

        current.nextPointer = cutOffBit;
    }


    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            throw RangeError;
        }

        if (index === 0) {
            this.head = this.head.nextPointer;
            return;
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.nextPointer;
        }

        current.nextPointer = current.nextPointer.nextPointer;
    }
}

class Node {
    constructor(value = null, nextPointer = null) {
        this.value = value;
        this.nextPointer = nextPointer;
    }
}