from django.db import models

class Funcionario(models.Model):
    nome = models.CharField(max_length=100, null= False, blank=False)
    cpf = models.CharField(max_length=14, null= False, blank=False)
    data_nascimento = models.DateField()
    email = models.EmailField(null=False, blank=False)
    telefone = models.CharField(max_length=20)
    endereco = models.TextField()
    cargo = models.CharField(max_length=100)
    departamento = models.CharField(max_length=100)
    remuneracao = models.DecimalField(max_digits=8, decimal_places=2, null=False, blank=False)
