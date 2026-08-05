""" 21. Escribe un script que solicite las horas trabajadas y la tarifa por hora al usuario y calcule el salario.
    - Introduce horas trabajadas: 40
    - Introduce tarifa por hora: 28
    - Tu salario semanal es 1120
"""
print("===== Ejercicio 21 =======")

horas_trabajadas = int(input('Introduce horas trabajadas: '))
tarifa_por_hora = int(input('Introduce tarifa por hora: '))
salario_total = horas_trabajadas * tarifa_por_hora

print('Tu salario semanal es: $',salario_total)

""" 22. Escribe un script que pida al usuario los años vividos y calcule cuántos segundos ha vivido una persona (supongamos que puede vivir 100 años).
    - Introduce cuántos años has vivido: 100
    - Has vivido 3153600000 segundos.
"""
print("===== Ejercicio 22 =======")

years_lived = int(input('Introduce cuántos años has vivido: '))

seconds_lived = years_lived * 365 * 24 * 60 * 60

print(f'Has vivido {seconds_lived} segundos')
