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
  // insert first node
  insertAtTop(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  insertAtBottom(data){
    let node = new Node(data);
    let currentNode;
    if(!this.head){
        this.head = node;
    }else{
        currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
    this.size ++;
  }
  insertAtIndex(data,index){
    if(index < 0 && index > this.size){
        return;
    }
    if(index === 0){
    this.head = new Node(data, this.head);
        return;
    }
    let currentNode,previousNode;
    let node = new Node(data);
    let count = 0;
    currentNode = this.head;
    while(count < index){
        previousNode = currentNode;
        count++;
        currentNode = currentNode.next;
    }
    console.log("Previous data::",previousNode.data);
    console.log("current::::",currentNode);

    node.next = currentNode;
    previousNode.next = node;
    this.size++;

  }
  displayData() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}
linkedList = new LinkedList();
linkedList.insertAtTop(200);
linkedList.insertAtTop(400);
linkedList.insertAtTop(500);
linkedList.insertAtTop(700);
linkedList.insertAtIndex(1900,4);

linkedList.displayData();
console.log(linkedList);
