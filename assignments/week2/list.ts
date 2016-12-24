namespace DataStructures {
    class StringListElement {
        next: StringListElement = undefined;

        constructor(public data: string) {
        }
    }
    class StringList {
        head: StringListElement = undefined;
        tail: StringListElement = undefined;

        add(data: string) {
            var entry = new StringListElement(data);
            if (!this.tail) {
                this.tail = entry;
                this.head = entry;
            }
            else {
                this.tail.next = entry;
                this.tail = entry;
            }
        }

        print() {
            var entry = this.head;
            // use a while loop to print all of the list elements starting from this elements
            // the while loop will stop when the next property of 'entry' is undefined
            while (entry.next) {
                console.log(entry.data);
                entry = entry.next;
            }
        }

        reverse() {
            var entry = this.head;
            // find a strategy for reversing the list and implement it here
            // hint: it will not use swap as in the array case
            // instead it will involve walking forward through the list, changing next pointers
            // you will need to remember the next pointer in a variable so you can get to the
            // next element of the list
            // in addition to reversing all of the next pointers, you need to also update the head and tail properties 
        }
    }

    function arrayToList(a: string[]) {
        var newList = new StringList();
        for (let i = 0; i < a.length; i++) {
            newList.add(a[i]);
        }
        return newList;
    }

    export function test() {
        var testList = arrayToList(["a", "cardinal", "eats", "seeds"]);
        console.log("Before reverse");
        testList.print();
        console.log("After reverse");
        testList.print();
    }

}

DataStructures.test();



