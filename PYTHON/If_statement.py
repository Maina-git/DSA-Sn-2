number = int((input('Enter a number')));

if number > 0:
    print(f'{number} is  a positive number');
print('A statement outside the  if  statement .')

x = 20
total = 0

if x != 0:
    total +=x
    print(total)

    print("This  is  always  excecuted")



# if else statment 

number = int(input('Enter a number:'))

if number > 0:
    print('Positive number')
else:
    print('Not a positive number')

print('This statement always excecutes')

# if else if  else 
number = -5

if number > 0:
    print('Negative number')

elif number < 0:
    print('Negative number')

else:
    print('Zero')

print("This statement is  always executed")    

#nested if 

number = 5

if number >= 0:

    if number == 0:
        print("Number is 0")
    else:
        print('Number is positive')

else:
    print('Number is  negative')





