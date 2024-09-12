
even=[]
odd=[]
num=[12,458,0,3,20,11,4,6,5]
for j in range(len(num)):
    if(num[j]%2==0):
        even.append(num[j])
    else:
        odd.append(num[j])
        
print(f"Even numbers are {even}")
print(f"Odd numbers are {odd}")