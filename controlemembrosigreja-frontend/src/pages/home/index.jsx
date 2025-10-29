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
  InputAdornment,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PatternFormat } from "react-number-format";
import { useEffect, useState } from "react";

const styles = {
  container: {
    width: "100vw",
    maxWidth: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    paddingBottom: "40px",
  },
  texfieldPesquisarMembro: {
    // Cor do texto digitado
    "& .MuiInputBase-input": { color: "white" },

    // Cor da label
    "& .MuiInputLabel-root": { color: "white" },

    // Cor da label quando focado
    "& .MuiInputLabel-root.Mui-focused": { color: "#90caf9" },

    // Borda padrão
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },

    // Borda ao passar o mouse
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#143e61ff",
    },

    // Borda ao focar
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(46, 161, 255, 1)",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "rgba(255, 255, 255, 1)",
      opacity: 1,
      fontWeight: 500,
    },
  },
  boxTextoBemVindo: {
    margin: "30px",
    gap: 1,
    display: "flex",
    flexDirection: "column",
  },
  boxConteudoPrincipal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "70%",
    minHeight: "80px",
    padding: "10px 10px 40px 10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
  },
  AccordionMembro: {
    width: "100%",
    boxShadow: 3,
    "& .MuiAccordionSummary-root.Mui-expanded": {
      minHeight: "30px",
    },
    "& .MuiAccordionDetails-root": {
      paddingTop: 0,
    },
  },
  AccordionMembroSummary: {
    "& .MuiAccordionSummary-content": {
      margin: "8px 0",
      transition: "margin 0.2s ease",
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
      margin: "12px 0",
    },
  },
  AccordionMembroDetails: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 1,
  },
  boxInfoMembro: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 2,
    alignItems: "flex-start",
  },
  boxTopicosInfoMembro: {
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    alignItems: "flex-start",
  },
  boxInfoMembroItem: {
    display: "flex",
    gap: 1,
  },
  textInfoMembro: {
    fontSize: 14,
  },
  dividerTopicosInfoMembro: {
    borderBottom: "1px solid",
    borderColor: "grey.400",
    width: "50%",
    height: "2px",
  },
};

const Home = () => {
  const [pesquisarMembro, setPesquisarMembro] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [indexEditMembro, setIndexEditMembro] = useState(null);
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
  const [listaMembros, setListaMembros] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [indexExcluirMembro, setIndexExcluirMembro] = useState(null);

  const handleOpenDialog = (index) => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setIndexEditMembro(null);

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
    const infoMembro = {
      nome,
      dataNascimento,
      sexo,
      telefone,
      situacaoCivil,
      endereco,
      batizado,
      encontroComDeus,
      libertacao,
      discipulado,
      temDiscipulador,
      nomeDiscipulador,
      funcaoIgreja,
      conselhoFiscal,
      suplente,
      diretoriaIgreja,
      liderCelula,
      professor,
      classeProfessor,
      auxiliarProfessor,
      dataInicioFuncao,
      tempoNaFuncao,
      treinamentoLideres,
      trilho,
    };

    let listaAtualizada = [...(listaMembros || [])];
    let organizarLista = true;

    if (indexEditMembro !== null) {
      // Editando membro existente
      listaAtualizada = listaAtualizada?.map((membro, index) => {
        if (index === indexEditMembro) {
          if (membro.nome === infoMembro.nome) organizarLista = false;
          return infoMembro;
        }
        return membro;
      });
    } else {
      // Adicionando novo membro
      listaAtualizada.push(infoMembro);
    }

    if (organizarLista) {
      listaAtualizada.sort((a, b) =>
        a.nome.localeCompare(b.nome, "pt", { sensitivity: "base" })
      );
      setExpanded(false);
    }

    setListaMembros(listaAtualizada);
    handleCloseDialog();
  };

  const handleEditarMembro = (index) => {
    const membro = listaMembros[index];
    setNome(membro.nome);
    setDataNascimento(membro.dataNascimento);
    setSexo(membro.sexo);
    setTelefone(membro.telefone);
    setSituacaoCivil(membro.situacaoCivil);
    setEndereco(membro.endereco);
    setBatizado(membro.batizado);
    setEncontroComDeus(membro.encontroComDeus);
    setLibertacao(membro.libertacao);
    setDiscipulado(membro.discipulado);
    setTemDiscipulador(membro.temDiscipulador);
    setNomeDiscipulador(membro.nomeDiscipulador);
    setFuncaoIgreja(membro.funcaoIgreja);
    setConselhoFiscal(membro.conselhoFiscal);
    setSuplente(membro.suplente);
    setDiretoriaIgreja(membro.diretoriaIgreja);
    setLiderCelula(membro.liderCelula);
    setProfessor(membro.professor);
    setClasseProfessor(membro.classeProfessor);
    setAuxiliarProfessor(membro.auxiliarProfessor);
    setDataInicioFuncao(membro.dataInicioFuncao);
    setTempoNaFuncao(membro.tempoNaFuncao);
    setTreinamentoLideres(membro.treinamentoLideres);
    setTrilho(membro.trilho);

    setIndexEditMembro(index);
    handleOpenDialog();
  };

  const handleOpenDialogExcluirMembro = (index) => {
    setIndexExcluirMembro(index);
    setOpenConfirmDialog(true);
  };

  const handleCloseDialogExcluirMembro = () => {
    setOpenConfirmDialog(false);
    setIndexExcluirMembro(null);
  };

  const handleExcluirMembro = () => {
    const newList = listaMembros.filter((_, i) => i !== indexExcluirMembro);

    setExpanded(false);
    setListaMembros(newList);
    handleCloseDialogExcluirMembro();
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

  const handleToggleExpand = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  const InfoItem = ({ label, value }) => {
    const color =
      value === "Sim"
        ? "success.main"
        : value === "Não"
        ? "error.main"
        : value === "N/A"
        ? "text.disabled"
        : "primary.main";

    return (
      <Box sx={styles.boxInfoMembroItem}>
        <Typography
          variant="body2"
          color="text.primary"
          fontWeight="bold"
          sx={{
            borderLeft: "3px solid",
            borderColor: "primary.main",
            paddingLeft: "4px",
          }}
        >
          {label}:
        </Typography>
        <Typography variant="body2" color={color}>
          {value}
        </Typography>
      </Box>
    );
  };

  const listaFiltrada = listaMembros?.filter((membro) => {
    const normalizar = (texto) =>
      texto
        ?.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // Remove acentuação

    const termo = normalizar(pesquisarMembro.trim());

    return (
      normalizar(membro.nome).includes(termo) ||
      normalizar(membro.sexo).includes(termo) ||
      normalizar(membro.situacaoCivil).includes(termo) ||
      normalizar(membro.funcaoIgreja).includes(termo)
    );
  });

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

  const listaTemporariaMembros = [
    {
      nome: "Samuel Cardoso Félix",
      dataNascimento: "28/02/2004",
      sexo: "Masculino",
      telefone: "(11) 98765-4321",
      situacaoCivil: "Solteiro",
      endereco: "Rua Exemplo, 123, Cidade, Estado",
      batizado: true,
      encontroComDeus: true,
      libertacao: false,
      discipulado: true,
      temDiscipulador: true,
      nomeDiscipulador: "João Silva",
      funcaoIgreja: "Líder de Célula",
      conselhoFiscal: [{ nome: "Carlos Alberto" }, { nome: "Mariana Souza" }],
      suplente: [{ nome: "Ana Paula" }],
      diretoriaIgreja: [{ nome: "Roberto Lima" }],
      liderCelula: true,
      professor: false,
      classeProfessor: "",
      auxiliarProfessor: [],
      dataInicioFuncao: "12/03/2022",
      tempoNaFuncao: "2 anos, 3 meses, 16 dias",
      treinamentoLideres: true,
      trilho: false,
    },
  ];

  return (
    <>
      <Box sx={styles.container}>
        {/* Cabeçalho da Página */}
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

              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  size="small"
                  placeholder="Pesquisar Membro"
                  value={pesquisarMembro}
                  onChange={(e) => {
                    setPesquisarMembro(e.target.value);
                    setExpanded(false);
                  }}
                  sx={styles.texfieldPesquisarMembro}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="secondary" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  onClick={handleOpenDialog}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    ":hover": { backgroundColor: "#0057a8ff" },
                  }}
                >
                  Adicionar Membro
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Dialog para adicionar membro */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle fontSize={24}>
            {indexEditMembro !== null ? "Editar Membro" : "Adicionar Membro"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {indexEditMembro !== null
                ? "Preencha os campos abaixo para editar o membro."
                : "Preencha os campos abaixo para adicionar um novo membro."}
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
                  <TextField
                    {...params}
                    label="Situação Civil"
                    margin="dense"
                  />
                )}
                sx={{ width: "235px" }}
              />
            </Box>
            <TextField
              margin="dense"
              label="Endereço: Rua, Número, Cidade, Estado"
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
                  <FormControlLabel
                    value="sim"
                    control={<Radio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value="nao"
                    control={<Radio />}
                    label="Não"
                  />
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
                  <FormControlLabel
                    value="sim"
                    control={<Radio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value="nao"
                    control={<Radio />}
                    label="Não"
                  />
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
                  <FormControlLabel
                    value="sim"
                    control={<Radio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value="nao"
                    control={<Radio />}
                    label="Não"
                  />
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
                  <FormControlLabel
                    value="sim"
                    control={<Radio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value="nao"
                    control={<Radio />}
                    label="Não"
                  />
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
                  <FormControlLabel
                    value="sim"
                    control={<Radio />}
                    label="Sim"
                  />
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
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
            >
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
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
            >
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
                    onChange={(e) =>
                      handleSuplenteChange(index, e.target.value)
                    }
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
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
            >
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
                  <FormControlLabel
                    value="sim"
                    control={<Radio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value="nao"
                    control={<Radio />}
                    label="Não"
                  />
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
                  <FormControlLabel
                    value="sim"
                    control={<Radio />}
                    label="Sim"
                  />
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

            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
            >
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
                  <FormControlLabel
                    value="sim"
                    control={<Radio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value="nao"
                    control={<Radio />}
                    label="Não"
                  />
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
                  <FormControlLabel
                    value="sim"
                    control={<Radio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    value="nao"
                    control={<Radio />}
                    label="Não"
                  />
                </RadioGroup>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} sx={{ color: "red" }}>
              Cancelar
            </Button>
            <Button
              disabled={nome.trim() === ""}
              onClick={handleSalvar}
              sx={{ color: "green" }}
            >
              {indexEditMembro !== null
                ? "Salvar Alterações"
                : "Adicionar Membro"}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Conteúdo Principal da Página */}
        <Box sx={styles.boxTextoBemVindo}>
          <Typography variant="h4" textAlign="center" color="primary">
            Bem-vindo ao Sistema de Controle de Membros da Igreja!
          </Typography>
          <Typography variant="body1" textAlign="center">
            Use a barra de pesquisa acima para encontrar membros ou adicione
            novos membros clicando no botão "Adicionar Membro".
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            fontStyle="italic"
            fontSize={12}
          >
            Pesquise por Nome, Sexo, Situação Civil ou Função na Igreja.
          </Typography>
        </Box>
        <Box sx={styles.boxConteudoPrincipal}>
          <Typography
            variant="h5"
            textAlign="center"
            color="primary"
            marginBottom={2}
            sx={{
              borderBottom: (theme) =>
                `2px solid ${theme.palette.primary.main}`,
              paddingBottom: "4px",
            }}
          >
            Lista de Membros
          </Typography>

          {listaFiltrada?.length > 0
            ? listaFiltrada?.map((membro, index) => (
                <Accordion
                  expanded={expanded === index}
                  onChange={handleToggleExpand(index)}
                  sx={styles.AccordionMembro}
                  key={index}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    sx={styles.AccordionMembroSummary}
                  >
                    <Typography component="span">{membro.nome}</Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={styles.AccordionMembroDetails}>
                    <Typography
                      textAlign="center"
                      fontSize={12.5}
                      color="primary"
                    >
                      Informações do membro:
                    </Typography>

                    <Box sx={styles.boxInfoMembro}>
                      {/* --- DADOS PESSOAIS --- */}
                      <Box sx={styles.boxTopicosInfoMembro}>
                        {[
                          { label: "Nome", value: membro.nome },
                          {
                            label: "Data de Nascimento",
                            value: membro.dataNascimento || "N/A",
                          },
                          { label: "Sexo", value: membro.sexo },
                          {
                            label: "Telefone",
                            value: membro.telefone || "N/A",
                          },
                          {
                            label: "Situação Civil",
                            value: membro.situacaoCivil || "N/A",
                          },
                          {
                            label: "Endereço",
                            value: membro.endereco || "N/A",
                          },
                        ].map((info, i) => (
                          <InfoItem
                            key={i}
                            label={info.label}
                            value={info.value}
                          />
                        ))}
                      </Box>

                      <Box sx={styles.dividerTopicosInfoMembro} />

                      {/* --- CAMINHO ESPIRITUAL --- */}
                      <Box sx={styles.boxTopicosInfoMembro}>
                        {[
                          {
                            label: "Batizado",
                            value: membro.batizado ? "Sim" : "Não",
                          },
                          {
                            label: "Fez Encontro com Deus",
                            value: membro.encontroComDeus ? "Sim" : "Não",
                          },
                          {
                            label: "Fez Libertação",
                            value: membro.libertacao ? "Sim" : "Não",
                          },
                          {
                            label: "Foi Discipulado",
                            value: membro.discipulado ? "Sim" : "Não",
                          },
                          {
                            label: "Nome do Discipulador",
                            value: membro.nomeDiscipulador || "N/A",
                          },
                          {
                            label: "Função na Igreja",
                            value: membro.funcaoIgreja || "N/A",
                          },
                        ].map((info, i) => (
                          <InfoItem
                            key={i}
                            label={info.label}
                            value={info.value}
                          />
                        ))}
                      </Box>

                      {/* --- CONSELHOS E DIRETORIA --- */}
                      {[
                        {
                          label: "Conselho Fiscal",
                          value:
                            membro.conselhoFiscal.length > 0
                              ? membro.conselhoFiscal
                                  .map((cons) => cons.nome)
                                  .join(", ")
                              : "N/A",
                        },
                        {
                          label: "Suplentes",
                          value:
                            membro.suplente.length > 0
                              ? membro.suplente
                                  .map((sup) => sup.nome)
                                  .join(", ")
                              : "N/A",
                        },
                        {
                          label: "Diretoria da Igreja",
                          value:
                            membro.diretoriaIgreja.length > 0
                              ? membro.diretoriaIgreja
                                  .map((dir) => dir.nome)
                                  .join(", ")
                              : "N/A",
                        },
                      ].map((info, i) => (
                        <InfoItem
                          key={i}
                          label={info.label}
                          value={info.value}
                        />
                      ))}

                      <Box sx={styles.dividerTopicosInfoMembro} />

                      {/* --- FUNÇÕES E LIDERANÇAS --- */}
                      <Box sx={styles.boxTopicosInfoMembro}>
                        {[
                          {
                            label: "Líder de Célula",
                            value: membro.liderCelula ? "Sim" : "Não",
                          },
                          {
                            label: "Professor",
                            value: membro.professor ? "Sim" : "Não",
                          },
                        ].map((info, i) => (
                          <InfoItem
                            key={i}
                            label={info.label}
                            value={info.value}
                          />
                        ))}

                        {[
                          {
                            label: "Professores Auxiliares",
                            value:
                              membro.auxiliarProfessor.length > 0
                                ? membro.auxiliarProfessor
                                    .map((aux) => aux.nome)
                                    .join(", ")
                                : "N/A",
                          },
                        ].map((info, i) => (
                          <InfoItem
                            key={i}
                            label={info.label}
                            value={info.value}
                          />
                        ))}

                        {[
                          {
                            label: "Classe do Professor",
                            value: membro.classeProfessor || "N/A",
                          },
                          {
                            label: "Data de Início na Função",
                            value: membro.dataInicioFuncao || "N/A",
                          },
                          {
                            label: "Tempo na Função",
                            value: membro.tempoNaFuncao || "N/A",
                          },
                          {
                            label: "Fez Treinamento de Líderes",
                            value: membro.treinamentoLideres ? "Sim" : "Não",
                          },
                          {
                            label: "Passou pelo Trilho",
                            value: membro.trilho ? "Sim" : "Não",
                          },
                        ].map((info, i) => (
                          <InfoItem
                            key={i}
                            label={info.label}
                            value={info.value}
                          />
                        ))}
                      </Box>
                    </Box>
                  </AccordionDetails>
                  <AccordionActions>
                    <Button
                      color="error"
                      onClick={() => handleOpenDialogExcluirMembro(index)}
                    >
                      Excluir
                    </Button>
                    <Button onClick={() => handleEditarMembro(index)}>
                      Editar
                    </Button>
                  </AccordionActions>
                </Accordion>
              ))
            : listaMembros?.length !== 0 && (
                <Typography
                  textAlign="center"
                  color="text.secondary"
                  fontStyle="italic"
                >
                  Nenhum membro encontrado
                </Typography>
              )}

          {listaMembros?.length === 0 && (
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
            >
              Nenhum membro encontrado. Adicione novos membros para vê-los aqui.
            </Typography>
          )}
        </Box>

        {/* Dialog de confirmação de exclusão */}
        <Dialog
          open={openConfirmDialog}
          onClose={handleCloseDialogExcluirMembro}
        >
          <DialogTitle>Confirmar Exclusão</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Tem certeza que deseja excluir este membro?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialogExcluirMembro}>Cancelar</Button>
            <Button onClick={handleExcluirMembro} color="error">
              Excluir
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default Home;
