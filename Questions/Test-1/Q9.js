Title:
Pot Nicking

Meta-Tags:
Javascript, JS, interview, questions, interview questions, primitive,functions,practice,medium 

Description:
A spoonerism is an error in speech in which corresponding consonants, vowels, or morphemes are switched between two words in a phrase. 
For example,

    kite flying becomes fite klying

Your task is to create a function 'spoon' that takes a string of two words, separated by a space and returns a spoonerism of those words in a string, as in the above example.
Note: Input will always contain 2 words

Sample Input:
kite flying

Sample Output:
fite klying

Test Cases:

    Input#1:
    "not picking"

    Output#1:
    "pot nicking"


    Input#2:
    "horse riding"
    
    Output#2:
    "rorse hiding"

Solution:
// create a function spoon 
function spoon(phrase) {
    // split the pharse on the basis of space " "
  phrase = phrase.split(" ");
  // cut out the intial word of word1 and word2 those are corresponds to 0th index 
  let word1 = phrase[0][0];
  let word2 = phrase[1][0];

  // we have to transfer the  word in the 1st index of word1 to word2 and the word at 1st index of word 2 to word 1

  let ans = word1+phrase[0].slice(1)+ ' ' + word2+phrase[1].slice(1)

  return ans;
  
}

spoon("not picking")