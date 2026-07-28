# EXERCISES LEVEL 2

# 1. Usa la función integrada type() para comprobar el tipo de las variables que declaraste.
first_name, last_name, country, age, is_married = (
    'Nat',
    'Arrazola',
    'Mexico',
    28,
    False
)

print(first_name, last_name, country, age, is_married)

print(type(first_name))
print(type(last_name))
print(type(country))
print(type(age))
print(type(is_married))

# 2. Usa la función len() para calcular la longitud de la variable first_name.
print('La longitud de first_name es:', len(first_name))

# 3. Compara la longitud de las variables first_name y last_name.
print('La longitud de last_name es:', len(last_name))

comparison = len(first_name) == len(last_name)
print('¿Tienen la misma longitud?', comparison)

# 4. Declara las variables num_one = 5 y num_two = 4.
num_one = 5
num_two = 4

print(num_one, num_two)

# I. Suma num_one y num_two y asigna el resultado a la variable total.
total = num_one + num_two
print('La suma es:', total)

# II. Resta num_two de num_one y asigna el resultado a la variable diff.
diff = num_one - num_two
print('La resta es:', diff)

# III. Multiplica num_one y num_two y asigna el resultado a la variable product.
product = num_one * num_two
print('La multiplicación es:', product)

# IV. Divide num_one entre num_two y asigna el resultado a la variable division.
division = num_one / num_two
print('La división es:', division)

# V. Usa la operación módulo para obtener el resto de num_two dividido por num_one y asígnalo a remainder.
remainder = num_two % num_one
print('El resto es:', remainder)

# VI. Calcula num_one elevado a num_two y asigna el valor a exp.
exp = num_one ** num_two
print('La potencia es:', exp)

# VII. Calcula la división entera de num_one entre num_two y asigna el resultado a floor_division.
floor_division = num_one // num_two
print('La división entera es:', floor_division)

"""
5. El círculo tiene un radio de 30 metros.

I. Calcula el área del círculo y asígnala a la variable area_of_circle.
II. Calcula la circunferencia del círculo y asígnala a la variable circum_of_circle.
III. Pide el radio al usuario y calcula el área.
"""

pi = 3.14
radius = 30

area_of_circle = pi * radius ** 2
print('Área del círculo:', area_of_circle)

circum_of_circle = 2 * pi * radius
print('Circunferencia del círculo:', circum_of_circle)

radius = float(input('Ingresa el radio del círculo: '))

area_of_circle = pi * radius ** 2
print('Área del círculo:', area_of_circle)

# 6. Usa la función integrada input() para obtener nombre, apellido, país y edad del usuario y almacena los valores en las variables correspondientes.
first_name = input('¿Cuál es tu nombre?: ')
last_name = input('¿Cuál es tu apellido?: ')
country = input('¿Cuál es tu país?: ')
age = input('¿Cuál es tu edad?: ')

print('Nombre:', first_name)
print('Apellido:', last_name)
print('País:', country)
print('Edad:', age)

# 7. Ejecuta help('keywords') en el intérprete de Python o en un archivo para comprobar las palabras reservadas (keywords) de Python.
help('keywords')