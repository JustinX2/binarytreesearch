class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  insertRecursively(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    if (!node) return new Node(val);
    if (val < node.val) {
      node.left = this.insertRecursively(val, node.left);
    } else if (val > node.val) {
      node.right = this.insertRecursively(val, node.right);
    }
    return node;
  }

  find(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      current = val < current.val ? current.left : current.right;
    }
    return undefined;
  }

  findRecursively(val, node = this.root) {
    if (!node) return undefined;
    if (val === node.val) return node;
    return val < node.val
      ? this.findRecursively(val, node.left)
      : this.findRecursively(val, node.right);
  }

  dfsPreOrder() {
    const result = [];
    function traverse(node) {
      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  dfsInOrder() {
    const result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  dfsPostOrder() {
    const result = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.val);
    }
    traverse(this.root);
    return result;
  }

  bfs() {
    const result = [];
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
}

module.exports = BinarySearchTree;