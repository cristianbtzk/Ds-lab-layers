CREATE TABLE IF NOT EXISTS medicacoes (
   id UUID PRIMARY KEY,
   nome varchar(50) NOT NULL,
   unidade varchar(50) NOT NULL,
   valor float NOT NULL
);

CREATE TABLE IF NOT EXISTS pacientes (
   id UUID PRIMARY KEY,
   nome varchar(50) NOT NULL,
   peso float NOT NULL,
   altura float NOT NULL
);

CREATE TABLE IF NOT EXISTS receitas (
   id UUID PRIMARY KEY,
   data DATE NOT NULL,
   pacienteId UUID NOT NULL,
   CONSTRAINT fk_paciente FOREIGN KEY(pacienteId) REFERENCES pacientes(id) 
);

CREATE TABLE IF NOT EXISTS receita_medicacoes (
  receitaId UUID REFERENCES receitas(id) ON UPDATE CASCADE ON DELETE CASCADE,
  medicacaoId UUID REFERENCES medicacoes(id) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT receita_medicacao_pkey PRIMARY KEY(receitaId, medicacaoId)
);