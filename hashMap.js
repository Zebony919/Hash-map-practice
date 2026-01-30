import { LinkedList } from "./linkedList.js";

export class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(this.capacity).fill(null).map(() => new LinkedList());
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    } 

    set(key, value) {
        const index = this.hash(key) % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const targetBucket = this.buckets[index];

        let i = 0;

        while (i < targetBucket.size()) {
            if (targetBucket.at(i).value.key === key) {
                targetBucket.removeAt(i);
                targetBucket.append({ key, value });
                return;
            }
            i++
        }

        targetBucket.append({ key, value });
        this.size++;

        if (this.currentLoadLevel() > this.loadFactor) {
            this.doubleSize();
        }
    }


    get(key) {
        const index = this.hash(key) % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const targetBucket = this.buckets[index];

        let i = 0;

        while (i < targetBucket.size()) {
            if (targetBucket.at(i).value.key === key) {
                return targetBucket.at(i).value.value;
            }
            i++;
        }

        return null;
    }


    has(key) {
        return this.get(key) !== null;
    }

    remove(key) {
        const index = this.hash(key) % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const targetBucket = this.buckets[index];

        let i = 0;

        while (i < targetBucket.size()) {
            if (targetBucket.at(i).value.key === key) {
                targetBucket.removeAt(i);
                return true;
            }
            i++;
        }

        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity).fill(null).map(() => new LinkedList());
        this.size = 0;
    }

    keys() {
        const keys = []

        for (let bucket of this.buckets) {
            if (bucket) {
                let i = 0;
                while (i < bucket.size()) {
                    keys.push(bucket.at(i).value.key);
                    i++;
                }
            }
        }

        return keys;
    }

    values() {
        const values = []
        const keys = this.keys();

        for (let key of keys) {
            values.push(this.get(key));
        }

        return values;
    }

    entries() {
        const entries = [];
        const keys = this.keys();
        const values = this.values();

        for (let i = 0; i < keys.length; i++) {
            entries.push([ keys[i], values[i] ]);
        }

        return entries;
    }

    currentLoadLevel() {
        return this.size / this.capacity;
    }

    doubleSize() {
        const entries = this.entries();
        this.capacity *= 2;
        this.clear();

        for (let entry of entries) {
            this.set(entry[0], entry[1]);
        }
    }
}