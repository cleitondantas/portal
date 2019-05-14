package com.montreal.portal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.montreal.portal.entity.Cadastro;

public interface CasdastroRepository extends JpaRepository<Cadastro,Integer>{
	
	@Query("select c from Cadastro c where c.numerocadastroincorporadorafid = :fid")
	List<Cadastro> findCadastroWithPartOfFid(@Param("fid") Integer fid);
	
	@Query(value = "select c.* from tb_cadastro c inner join tb_cliente_cadastro cc on cc.cod_cadastro = c.cod_cadastro inner join tb_clientes cl  on cl.cpf_cnpj = cc.cpf_cnpj where cl.nome_cliente like %:nome%",nativeQuery = true)
	List<Cadastro> findCadastroWithPartOfNomeCliente(@Param("nome") String nome);
	
	@Query(value = "select c.* from tb_cadastro c inner join tb_cliente_cadastro cc on cc.cod_cadastro = c.cod_cadastro inner join tb_clientes cl  on cl.cpf_cnpj = cc.cpf_cnpj where cl.cpf_cnpj like %:cpf%",nativeQuery = true)
	List<Cadastro> findCadastroWithPartOfCPFCliente(@Param("cpf") String cpf);
	
	@Query(value = "SELECT TOP 10 * FROM tb_cadastro order by dt_atividade desc",nativeQuery = true)
	List<Cadastro> 	findTopCadastro();
}
