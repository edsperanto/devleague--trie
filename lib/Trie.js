/**
 * Create a Class Trie
 * that can work with a trie data structure
 *
 * Instance Methods
 *
 * add( word )
 * @param word  string
 * @returns void
 *
 * exists( word )
 * @param word  string
 * @returns boolean
 *          true if the word exists in the trie, else false
 */

class Trie {
	constructor() {
		this.root = {};
	}
	check(word) {
		if(typeof word !== 'string') {
			throw new TypeError();
		}
	}
	traverse(word, cb) {
		cb(word[0]);
		if(word.length > 1) {
			this.traverse(word.substr(1), cb);
		}
	}
	add(word) {
		let currNode = this.root;
		this.check(word);
		this.traverse(word, c => {
			if(!currNode[c]) {
				currNode[c] = {};
			}
			currNode = currNode[c];
		});
		currNode.isWord = true;
	}
	exists(word) {
		let currNode = this.root;
		this.check(word);
		this.traverse(word, c => {
			if(!currNode[c]) {
				return false;
			}else{
				currNode = currNode[c];
			}
		});
		return !!currNode.isWord;
	}
}

module.exports = Trie;
