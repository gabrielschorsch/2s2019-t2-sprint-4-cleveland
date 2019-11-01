create database T_Cleveland

use T_Cleveland

Create Table Especialidades(
	IdEspecialidade int primary key identity,
	Nome Varchar(255) not null
)

Create Table Medicos (
	IdMedico int primary key identity,
	Nome Varchar(255) not null,
	DataNascimento date not null,
	CRM int unique not null,
	ativo bit not null default(1),
	IdEspecialidade int foreign key references Especialidades(IdEspecialidade)
)


Select * From Medicos