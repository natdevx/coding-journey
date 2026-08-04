# 12. Encuentra la longitud de 'python' y 'dragon', y realiza una comparación ficticia.
print("===== Ejercicio 12 =======")

python_length = len("python")
dragon_length = len("dragon")

print("Longitud de 'python':", python_length)
print("Longitud de 'dragon':", dragon_length)
print("¿Tienen la misma longitud?:", python_length == dragon_length)

# 13. Usa el operador and para comprobar si tanto 'python' como 'dragon' contienen 'on'.
print("===== Ejercicio 13 =======")
print("¿'python' y 'dragon' contienen 'on'?:", "on" in "python" and "on" in "dragon")

# 14. En la oración I hope this course is not full of jargon, usa el operador in para comprobar si contiene la palabra jargon.
print("===== Ejercicio 14 =======")
phrase = "I hope this course is not full of jargon"

print("¿La oracion contiene la palabra 'jargon'?: ", "jargon" in phrase)

# 15. Comprueba que ni 'dragon' ni 'python' contienen 'on'.
print("===== Ejercicio 15 =======")
print("¿Ni 'python' ni 'dragon' contienen 'on'?:", "on" not in "python" and "on" not in "dragon")
