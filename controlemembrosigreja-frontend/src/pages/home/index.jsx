import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Toolbar,
  Typography,
  DialogContentText,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
} from "@mui/material";
import { PatternFormat } from "react-number-format";
import { useState } from "react";

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
  },
};

const Home = () => {
  const [openDialogAddMembro, setOpenDialogAddMembro] = useState(false);
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("Masculino");
  const [telefone, setTelefone] = useState("");
  const [situacaoCivil, setSituacaoCivil] = useState("");
  const [endereco, setEndereco] = useState("");
  const [batizado, setBatizado] = useState(false);
  const [encontroComDeus, setEncontroComDeus] = useState(false);
  const [libertacao, setLibertacao] = useState(false);
  const [discipulado, setDiscipulado] = useState(false);
  const [temDiscipulador, setTemDiscipulador] = useState(false);
  const [nomeDiscipulador, setNomeDiscipulador] = useState("");
  const [funcaoIgreja, setFuncaoIgreja] = useState("");
  const [conselhoFiscal, setConselhoFiscal] = useState([]);
  const [suplente, setSuplente] = useState([]);
  const [diretoriaIgreja, setDiretoriaIgreja] = useState([]);
  const [liderCelula, setLiderCelula] = useState(false);
  const [professor, setProfessor] = useState(false);
  const [classeProfessor, setClasseProfessor] = useState("");
  const [auxiliarProfessor, setAuxiliarProfessor] = useState([]);
  const [dataInicioFuncao, setDataInicioFuncao] = useState("");
  const [tempoNaFuncao, setTempoNaFuncao] = useState("");
  const [treinamentoLideres, setTreinamentoLideres] = useState(false);
  const [trilho, setTrilho] = useState(false);

  const handleOpenDialogAddMembro = () => setOpenDialogAddMembro(true);

  const handleCloseDialog = () => {
    setOpenDialogAddMembro(false);

    // Limpar campos
    setNome("");
    setDataNascimento("");
    setSexo("Masculino");
    setTelefone("");
    setSituacaoCivil("");
    setEndereco("");
    setBatizado(false);
    setEncontroComDeus(false);
    setLibertacao(false);
    setDiscipulado(false);
    setTemDiscipulador(false);
    setNomeDiscipulador("");
    setFuncaoIgreja("");
    setConselhoFiscal([]);
    setSuplente([]);
    setDiretoriaIgreja([]);
    setLiderCelula(false);
    setProfessor(false);
    setClasseProfessor("");
    setAuxiliarProfessor([]);
    setDataInicioFuncao("");
    setTempoNaFuncao("");
    setTreinamentoLideres(false);
    setTrilho(false);
  };

  const handleSalvar = () => {
    handleCloseDialog();
  };

  // Adiciona um novo conselheiro vazio
  const adicionarConselheiro = () => {
    setConselhoFiscal([...conselhoFiscal, { nome: "" }]);
  };

  // Remove um conselheiro pelo índice
  const removerConselheiro = (index) => {
    const newList = conselhoFiscal.filter((_, i) => i !== index);
    setConselhoFiscal(newList);
  };

  // Atualiza o nome de um conselheiro específico
  const handleConselheiroChange = (index, value) => {
    const newList = [...conselhoFiscal];
    newList[index].nome = value;
    setConselhoFiscal(newList);
  };

  // Adiciona um novo suplente vazio
  const adicionarSuplente = () => {
    setSuplente([...suplente, { nome: "" }]);
  };

  // Remove um suplente pelo índice
  const removerSuplente = (index) => {
    const newList = suplente.filter((_, i) => i !== index);
    setSuplente(newList);
  };

  // Atualiza o nome de um suplente específico
  const handleSuplenteChange = (index, value) => {
    const newList = [...suplente];
    newList[index].nome = value;
    setSuplente(newList);
  };

  // Adiciona um novo diretor vazio
  const adicionarDiretor = () => {
    setDiretoriaIgreja([...diretoriaIgreja, { nome: "" }]);
  };

  // Remove um diretor pelo índice
  const removerDiretor = (index) => {
    const newList = diretoriaIgreja.filter((_, i) => i !== index);
    setDiretoriaIgreja(newList);
  };

  // Atualiza o nome de um diretor específico
  const handleDiretorChange = (index, value) => {
    const newList = [...diretoriaIgreja];
    newList[index].nome = value;
    setDiretoriaIgreja(newList);
  };

  // Adiciona um novo Auxiliar vazio
  const adicionarAuxiliarProfessor = () => {
    setAuxiliarProfessor([...auxiliarProfessor, { nome: "" }]);
  };

  // Remove um Auxiliar pelo índice
  const removerAuxiliarProfessor = (index) => {
    const newList = auxiliarProfessor.filter((_, i) => i !== index);
    setAuxiliarProfessor(newList);
  };

  // Atualiza o nome de um Auxiliar específico
  const handleAuxiliarProfessorChange = (index, value) => {
    const newList = [...auxiliarProfessor];
    newList[index].nome = value;
    setAuxiliarProfessor(newList);
  };

  const handleDataInicioFuncaoChange = (e) => {
    const dataSelecionada = e.target.value;
    setDataInicioFuncao(dataSelecionada);

    if (!dataSelecionada) {
      setTempoNaFuncao("");
      return;
    }

    const dataInicio = new Date(dataSelecionada);
    const hoje = new Date();

    let anos = hoje.getFullYear() - dataInicio.getFullYear();
    let meses = hoje.getMonth() - dataInicio.getMonth();
    let dias = hoje.getDate() - dataInicio.getDate();

    // Ajuste de dias
    if (dias < 0) {
      meses--;
      // Pega o último dia do mês anterior
      const ultimoDiaMesAnterior = new Date(
        hoje.getFullYear(),
        hoje.getMonth(),
        0
      ).getDate();
      dias += ultimoDiaMesAnterior;
    }

    // Ajuste de meses
    if (meses < 0) {
      anos--;
      meses += 12;
    }

    // Monta a string legível
    let tempo = [];

    if (anos > 0) tempo.push(`${anos} ano${anos > 1 ? "s" : ""}`);
    if (meses > 0) tempo.push(`${meses} mês${meses > 1 ? "es" : ""}`);
    if (dias > 0) tempo.push(`${dias} dia${dias > 1 ? "s" : ""}`);

    if (tempo.length === 0) tempo = ["Menos de 1 dia"];

    setTempoNaFuncao(tempo.join(", ").replace(/,([^,]*)$/, " e$1"));
  };

  const opcoesSituacaoCivil = ["Solteiro", "Casado", "Divorciado", "Viúvo"];
  const classeProfessorOptions = [
    "Maternal",
    "Jardim",
    "Escolar 1",
    "Escolar 2",
    "Juniores",
    "Adolescentes",
    "Jovens",
    "Jovens Casados",
    "Crescimento 1",
    "Crescimento 2",
    "Adultos",
    "Melhor Idade (+60)",
  ];

  return (
    <Box sx={styles.container}>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "white", fontWeight: "bold" }}
            >
              Membros da Igreja
            </Typography>
            <Button
              onClick={handleOpenDialogAddMembro}
              sx={{
                color: "white",
                fontWeight: "bold",
                ":hover": { backgroundColor: "#0057a8ff" },
              }}
            >
              Adicionar Membro
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Dialog open={openDialogAddMembro} onClose={handleCloseDialog}>
        <DialogTitle fontSize={24}>Adicionar Membro</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha os campos abaixo para adicionar um novo membro.
          </DialogContentText>
          <TextField
            margin="dense"
            label="Nome"
            fullWidth
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              margin="dense"
              label="Data de Nascimento"
              type="date"
              fullWidth
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                max: new Date().toISOString().split("T")[0], // impede datas futuras
              }}
              sx={{ width: "200px" }}
            />
            <Box>
              <DialogContentText color="black">Sexo:</DialogContentText>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
                sx={{ width: "235px" }}
              >
                <FormControlLabel
                  value="Masculino"
                  control={<Radio />}
                  label="Masculino"
                />
                <FormControlLabel
                  value="Feminino"
                  control={<Radio />}
                  label="Feminino"
                />
              </RadioGroup>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <PatternFormat
              format="(##) #####-####"
              allowEmptyFormatting
              mask="_"
              value={telefone}
              onValueChange={(values) => setTelefone(values.value)}
              customInput={TextField}
              label="Telefone"
              fullWidth
              margin="dense"
              variant="outlined"
              sx={{ width: "200px" }}
            />

            <Autocomplete
              options={opcoesSituacaoCivil}
              value={situacaoCivil}
              onChange={(e, newValue) => setSituacaoCivil(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Situação Civil" margin="dense" />
              )}
              sx={{ width: "235px" }}
            />
          </Box>
          <TextField
            margin="dense"
            label="Endereço"
            fullWidth
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <Box
            sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}
          >
            <Box>
              <DialogContentText color="black">Batizado:</DialogContentText>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={batizado ? "sim" : "nao"}
                onChange={(e) => setBatizado(e.target.value === "sim")}
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="nao" control={<Radio />} label="Não" />
              </RadioGroup>
            </Box>
            <Box marginRight={7}>
              <DialogContentText color="black">
                Fez Encontro com Deus:
              </DialogContentText>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={encontroComDeus ? "sim" : "nao"}
                onChange={(e) => setEncontroComDeus(e.target.value === "sim")}
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="nao" control={<Radio />} label="Não" />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}
          >
            <Box>
              <DialogContentText color="black">
                Fez Libertação:
              </DialogContentText>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={libertacao ? "sim" : "nao"}
                onChange={(e) => setLibertacao(e.target.value === "sim")}
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="nao" control={<Radio />} label="Não" />
              </RadioGroup>
            </Box>
            <Box marginRight={10.2}>
              <DialogContentText color="black">
                Foi Discipulado:
              </DialogContentText>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={discipulado ? "sim" : "nao"}
                onChange={(e) => setDiscipulado(e.target.value === "sim")}
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="nao" control={<Radio />} label="Não" />
              </RadioGroup>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}
          >
            <Box>
              <DialogContentText color="black">
                Tem Discipulador:
              </DialogContentText>
              <RadioGroup
                row
                name="row-radio-buttons-group"
                value={temDiscipulador ? "sim" : "nao"}
                onChange={(e) => setTemDiscipulador(e.target.value === "sim")}
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel
                  value="nao"
                  control={<Radio />}
                  label="Não"
                  onClick={() => setNomeDiscipulador("")}
                />
              </RadioGroup>
            </Box>

            <Box sx={{ flex: 1 }}>
              <TextField
                disabled={!temDiscipulador}
                margin="dense"
                label="Nome do Discipulador"
                fullWidth
                value={nomeDiscipulador}
                onChange={(e) => setNomeDiscipulador(e.target.value)}
              />
            </Box>
          </Box>
          <TextField
            margin="dense"
            label="Função na Igreja"
            fullWidth
            value={funcaoIgreja}
            onChange={(e) => setFuncaoIgreja(e.target.value)}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <DialogContentText color="black" marginBottom={-1}>
              Conselho Fiscal:
            </DialogContentText>

            {conselhoFiscal?.map((conselheiro, index) => (
              <Box
                key={index}
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <TextField
                  label={`Conselheiro ${index + 1}`}
                  value={conselheiro.nome}
                  onChange={(e) =>
                    handleConselheiroChange(index, e.target.value)
                  }
                  fullWidth
                />
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removerConselheiro(index)}
                >
                  -
                </Button>
              </Box>
            ))}

            <Button variant="outlined" onClick={adicionarConselheiro}>
              + Adicionar Conselheiro
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <DialogContentText color="black" marginBottom={-1}>
              Suplente:
            </DialogContentText>

            {suplente?.map((suplente, index) => (
              <Box
                key={index}
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <TextField
                  label={`Suplente ${index + 1}`}
                  value={suplente.nome}
                  onChange={(e) => handleSuplenteChange(index, e.target.value)}
                  fullWidth
                />
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removerSuplente(index)}
                >
                  -
                </Button>
              </Box>
            ))}

            <Button variant="outlined" onClick={adicionarSuplente}>
              + Adicionar Suplente
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <DialogContentText color="black" marginBottom={-1}>
              Diretoria da Igreja:
            </DialogContentText>

            {diretoriaIgreja?.map((diretor, index) => (
              <Box
                key={index}
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <TextField
                  label={`Diretor ${index + 1}`}
                  value={diretor.nome}
                  onChange={(e) => handleDiretorChange(index, e.target.value)}
                  fullWidth
                />
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removerDiretor(index)}
                >
                  -
                </Button>
              </Box>
            ))}

            <Button
              variant="outlined"
              onClick={adicionarDiretor}
              sx={{ marginBottom: "12px" }}
            >
              + Adicionar Diretor
            </Button>
          </Box>
          <Box
            sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}
          >
            <Box>
              <DialogContentText color="black">
                Lider de Célula:
              </DialogContentText>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={liderCelula ? "sim" : "nao"}
                onChange={(e) => setLiderCelula(e.target.value === "sim")}
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="nao" control={<Radio />} label="Não" />
              </RadioGroup>
            </Box>
            <Box marginRight={10.2}>
              <DialogContentText color="black">Professor:</DialogContentText>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={professor ? "sim" : "nao"}
                onChange={(e) => setProfessor(e.target.value === "sim")}
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel
                  value="nao"
                  control={<Radio />}
                  label="Não"
                  onClick={() => {
                    setClasseProfessor("");
                    setAuxiliarProfessor([]);
                  }}
                />
              </RadioGroup>
            </Box>
          </Box>
          <Autocomplete
            disabled={!professor}
            options={classeProfessorOptions}
            value={classeProfessor}
            onChange={(e, newValue) => setClasseProfessor(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Classe do Professor"
                margin="dense"
              />
            )}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <DialogContentText color="black" marginBottom={-1}>
              Auxiliares do Professor:
            </DialogContentText>

            {auxiliarProfessor?.map((auxiliarProfessor, index) => (
              <Box
                key={index}
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <TextField
                  label={`Auxiliar do Professor ${index + 1}`}
                  value={auxiliarProfessor.nome}
                  onChange={(e) =>
                    handleAuxiliarProfessorChange(index, e.target.value)
                  }
                  fullWidth
                />
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removerAuxiliarProfessor(index)}
                >
                  -
                </Button>
              </Box>
            ))}

            <Button
              disabled={!professor}
              variant="outlined"
              onClick={adicionarAuxiliarProfessor}
              sx={{ marginBottom: "12px" }}
            >
              + Adicionar Auxiliar
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              marginBottom: 1,
            }}
          >
            <TextField
              margin="dense"
              label="Data de Início na Função"
              type="date"
              fullWidth
              value={dataInicioFuncao}
              onChange={handleDataInicioFuncaoChange}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                max: new Date().toISOString().split("T")[0], // impede datas futuras
              }}
              sx={{ width: "200px" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <DialogContentText color="black">
                Tempo na Função:
              </DialogContentText>
              {dataInicioFuncao !== "" && (
                <DialogContentText color="black">
                  {tempoNaFuncao}
                </DialogContentText>
              )}
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}
          >
            <Box>
              <DialogContentText color="black">
                Fez Treinamento de Líderes:
              </DialogContentText>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={treinamentoLideres ? "sim" : "nao"}
                onChange={(e) =>
                  setTreinamentoLideres(e.target.value === "sim")
                }
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="nao" control={<Radio />} label="Não" />
              </RadioGroup>
            </Box>
            <Box marginRight={10.2}>
              <DialogContentText color="black">
                Passou pelo Trilho:
              </DialogContentText>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={trilho ? "sim" : "nao"}
                onChange={(e) => setTrilho(e.target.value === "sim")}
              >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="nao" control={<Radio />} label="Não" />
              </RadioGroup>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: "red" }}>
            Cancelar
          </Button>
          <Button onClick={handleSalvar} sx={{ color: "green" }}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Home;
