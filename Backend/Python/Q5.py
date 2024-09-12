
word=input("Enter the word ")
vowels=["a","e","i","o","u"]
count=0
for k in range(len(word)):
    if(word[k] in vowels):
        count+=1
print(count)
