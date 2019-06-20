// Source: freeCodeCamp: https://codepen.io/beaucarnes/pen/ybOvBq?editors=0011

/* LinkedList */

function LinkedList() { 
  var length = 0; 
  var head = null; // no nodes

  var Node = function(element){
    this.element = element; // info
    this.next = null; // link
  }; 

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){ // no nodes yet
        head = node; // one node
    } else {
        var currentNode = head; // start at the head node

        while(currentNode.next){ // as long as there is a next node
            currentNode  = currentNode.next; // hop from node to node
        }

        currentNode.next = node; // add aftert last node in the list
    }

    length++;
  }; 

  this.remove = function(element){
    var currentNode = head; // always start at head
    var previousNode;
    if(currentNode.element === element){ // if head is element
        head = currentNode.next; // move head pointer to 2nd node
    } else {
        while(currentNode.element !== element) { // move previous and current if we don't get the element
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next; // move next link
    }

    length --;
  };
  
  this.isEmpty = function() {
    return length === 0;
  };

  this.indexOf = function(element) { // index of specific element
    var currentNode = head;
    var index = -1;

    while(currentNode){
        index++;
        if(currentNode.element === element){
            return index;
        }
        currentNode = currentNode.next;
    }

    return -1;
  };

  this.elementAt = function(index) {
    var currentNode = head;
    var count = 0;
    while (count < index){
        count ++;
        currentNode = currentNode.next
    }
    return currentNode.element;
  };
  
  
  this.addAt = function(index, element){ // allows to add elsewhere
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if(index > length){
        return false;
    }

    if(index === 0){
        node.next = currentNode;
        head = node;
    } else {
        while(currentIndex < index){
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
    }
    length++;
  }
  
  this.removeAt = function(index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length){
        return null
    }
    if(index === 0){
        head = currentNode.next;
    } else {
        while(currentIndex < index) {
            currentIndex ++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
    }
    length--;
    return currentNode.element;
  }

} 

var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());