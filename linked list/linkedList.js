class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //instert at First
  insertAtFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.size++;
  }
  //get by index
  getByIndex(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  //insert at index
  insertAtIndex(index, data) {
    if (index == 0) {
      this.insertAtFirst(data);
    }
    let previous = this.getByIndex(index - 1);
    if (previous == null) {
      return null;
    }
    previous.next = new Node(data, previous.next);
    this.size++;
  }
  //remove head
  removeHead() {
    this.head = this.head.next;
    this.size--;
  }
  //remove at Index
  removeAtIndex(index) {
    if (index == 0) {
      this.removeHead();
    }
    let previous = this.getByIndex(index - 1);
    if (previous == null) {
      return null;
    }
    previous.next = previous.next.next;
    this.size++;
  }
  //print linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertAtFirst(100);
ll.insertAtFirst(200);
ll.insertAtIndex(2, 50);
ll.insertAtIndex(1, 60);
ll.removeHead(1);
ll.print();
