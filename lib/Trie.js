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
	add(word) {
		let currNode = this.root;
		if(typeof word !== 'string') {
			throw new TypeError();
		}
		for(let i = 0; i < word.length; i++) {
			let c = word[i];
			if(c === ' ') break;
			if(!currNode[c]) currNode[c] = {};
			currNode = currNode[c];
		}
		currNode.isWord = true;
		console.log(JSON.stringify(this.root));
	}
	exists(word) {

	}
}

module.exports = Trie;
