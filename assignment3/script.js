// Write a Hash Table class that stores strings in a hash table, where
//keys are calculated using the first two letters of the string.

const hash = (string, max) => {
  let hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed % max;
};

class HashTable {
    constructor() {
        let storage = [];
        const storageLimit = 14;
        this.print = function () {
            console.log(storage);
        };
        this.add = function (value) {
            let key = value.slice(0, 2);
            var index = hash(key, storageLimit);
            if (storage[index] === undefined) {
                storage[index] = [[key, value]];
            }
            else {
                var inserted = false;
                for (var i = 0; i < storage[index].length; i++) {
                    if (storage[index][i][0] === key) {
                        storage[index][i][1] = value;
                        inserted = true;
                    }
                }
                if (inserted === false) {
                    storage[index].push([key, value]);
                }
            }
        };
        
        this.lookup = function (key) {
            var index = hash(key, storageLimit);
            if (storage[index] === undefined) {
                return undefined;
            }
            else {
                for (var i = 0; i < storage[index].length; i++) {
                    if (storage[index][i][0] === key) {
                        return storage[index][i][1];
                    }
                }
            }
        };
    }
}

let ht = new HashTable();
ht.add("hello");
ht.add("hash");
ht.add("table");
ht.add("world");
console.log(ht.lookup("he"));
ht.print()