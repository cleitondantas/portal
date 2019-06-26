package com.montreal.portal.entity.face;

import java.util.Date;
import java.util.List;

import com.montreal.portal.entity.Cliente;

public interface CadastroInterface {

	
	

	Integer getCodcadastro();

	void setCodcadastro(Integer codcadastro);

	Integer getCodoriginacao();

	void setCodoriginacao(Integer codoriginacao);
	String getBlocotorre();
	
	void setBlocotorre(String blocotorre);
	
	String getUnidade();
	
	void setUnidade(String unidade);
	
	Long getCodusuario();
	
	void setCodusuario(Long codusuario);


	 Date getDtentrada();
	
	void setDtentrada(Date dtentrada);
	
	 String getVagaautomovel();
	

	void setVagaautomovel(String vagaautomovel);
	
	String getBox();
	
	 void setBox(String box);

	 String getCep();
	
	
	 void setCep(String cep);
	
	
	 String getNumero();
	
	 void setNumero(String numero);
	
	 String getBairro();
	
	 void setBairro(String bairro);
	
	
	 String getCidade();
	
	 void setCidade(String cidade);
	
	 String getEndereco();
	
	 void setEndereco(String endereco);
	
	
	 String getComplemento();
	

	 void setComplemento(String complemento);
	
	 String getUf();
	
	 void setUf(String uf);

     List<Cliente> getClientes();

	void setClientes(List<Cliente> clientes);

	Date getDtatividade();

	void setDtatividade(Date dtatividade);
	
	 String getCpfcnpj();
	
	 void setCpfcnpj(String cpfcnpj);

	 Integer getCodincorporadora();

	 void setCodincorporadora(Integer codincorporadora);
	
	 Integer getNumerocadastroincorporadorafid();
	
	 void setNumerocadastroincorporadorafid(Integer numerocadastroincorporadorafid);
	
	 Integer getCodempreendimento();

	 void setCodempreendimento(Integer codempreendimento);

	 Date getDtatualizacao();

	 void setDtatualizacao(Date dtatualizacao);
	
	 
	
}
