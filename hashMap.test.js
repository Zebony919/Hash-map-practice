import { test } from 'node:test';
import assert from 'node:assert';
import { HashMap } from './hashMap.js';

test("HashMap set method", () => {
  const map = new HashMap();
  map.set('name', 'Alice');
  assert.strictEqual(map.size, 1);
});

test("HashMap Get method", () => {
  const map = new HashMap();
  map.set('name', 'Jerry');
  assert.strictEqual(map.get('name'), 'Jerry');
})

test("HashMap has method", () => {
    const map = new HashMap();
    map.set('name', 'Jerry');
    assert.strictEqual(map.has("name"), true);
})

test("HashMap remove method", () => {
    const map = new HashMap();
    map.set('name', 'Jerry');
    map.remove("name");
    assert.strictEqual(map.has("name"), false);
})

test("HashMap length method", () => {
    const map = new HashMap();
    map.set('name', 'Jerry');
    assert.strictEqual(map.length(), 1);
})

test("HashMap clear method", () => {
    const map = new HashMap();
    map.set('name', 'Jerry');
    map.clear();
    assert.strictEqual(map.length(), 0);
})

test("HashMap keys method", () => {
    const map = new HashMap();
    map.set('name', 'Jerry');
    map.set('job', "Software Developer")
    assert.deepStrictEqual(map.keys(), ["name", "job"]);
})

test("HashMap values method", () => {
    const map = new HashMap();
    map.set('name', 'Jerry');
    map.set('job', "Software Developer")
    assert.deepStrictEqual(map.values(), ["Jerry", "Software Developer"]);
})

test("HashMap entries method", () => {
    const map = new HashMap();
    map.set('name', 'Jerry');
    map.set('job', "Software Developer")
    assert.deepStrictEqual(map.entries(), [["name", "Jerry"], ["job", "Software Developer"]]);
})

test("HashMap doubleSize method", () => {
    const map = new HashMap();
    map.set('name', 'Jerry');
    map.set('apple', 'red')
    map.set('banana', 'yellow')
    map.set('carrot', 'orange')
    map.set('dog', 'brown')
    map.set('elephant', 'gray')
    map.set('frog', 'green')
    map.set('grape', 'purple')
    map.set('hat', 'black')
    map.set('ice cream', 'white')
    map.set('jacket', 'blue')
    map.set('kite', 'pink')
    map.set('lion', 'golden')
    assert.strictEqual(map.capacity, 32);
})