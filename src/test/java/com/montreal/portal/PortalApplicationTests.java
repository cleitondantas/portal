
//import java.util.HashSet;
//
//import com.montreal.portal.security.entity.Role;
//import com.montreal.portal.security.entity.Usuario;
//
//    @Autowired
//    private UsuarioRepository usuarioRepository;
//
//    @Autowired
//    private ClientesRepository clientesRepository;
//    
//    @Autowired
//    private CadastroPropostaRepository cadastroPropostaRepository;
//    
//    @Autowired
//    private PasswordEncoder passwordEncoder;
////System.out.println(cadastroPropostaRepository.findAll());
//		Usuario admin1 = new Usuario();
//        admin1.setPassword(passwordEncoder.encode("Pedepano10!"));
//       
//        admin1.setCpf("33590760877");
//        admin1.setEmail("cleiton.anjos@montreal.com.br");
//        admin1.setLogin("admin");
//        admin1.setNome("Cleiton");
//        admin1.setSobrenome("Dantas");
//        admin1.setTelefone("11967762182");
//        admin1.setIsAtivo(true);
//
//        Usuario admin2 = new Usuario();
//        admin2.setPassword(passwordEncoder.encode("Pedepano10!"));
//        admin2.setCpf("3356145214");
//        admin2.setEmail("bruna.neri@gmail.com");
//        admin2.setLogin("bruna.neri");
//        admin2.setNome("Bruna");
//        admin2.setSobrenome("Neri");
//        admin2.setTelefone("1191321541");
//        admin2.setIsAtivo(true);
//
//        Usuario admin3 = new Usuario();
//        admin3.setPassword(passwordEncoder.encode("Pedepano10!"));
//        admin3.setCpf("231321321231231");
//        admin3.setEmail("custumer@gmail.com");
//        admin3.setLogin("roler_custumer");
//        admin3.setNome("Roler");
//        admin3.setSobrenome("Custumer");
//        admin3.setTelefone("11913122121212");
//        admin3.setIsAtivo(true);
//        
//        HashSet<Role> lisRoles = new HashSet<Role>();
//        HashSet<Role> lisRoles1 = new HashSet<Role>();
//        HashSet<Role> lisRoles2 = new HashSet<Role>();
//        HashSet<Role> lisRoles3 = new HashSet<Role>();
//        
//        Role role1 = new Role();
//        role1.setNivel(1);
//        role1.setProfile("ADMIN");
//        //Setadno ID
//        role1.setId(1);
//        
//        
//        Role role2 = new Role();
//        role2.setNivel(2);
//        role2.setProfile("ROLE_ANALISTA");
//
//        Role role3 = new Role();
//        role3.setNivel(3);
//        role3.setProfile("ROLE_TECNICO");
//        
//        
//        HashSet<Usuario> hasUsersA = new HashSet<Usuario>();
//        hasUsersA.add(admin1);
//        hasUsersA.add(admin2);
//     
//        
//        HashSet<Usuario> hasUsersB = new HashSet<Usuario>();
//        hasUsersB.add(admin1);
//        hasUsersB.add(admin3);
//   
//             
//        
//        lisRoles.add(role1);
//     //   lisRoles.add(role2);
//      //  lisRoles.add(role3);
//
//        lisRoles1.add(role1);
//        admin1.setPerfis(lisRoles1);
//        
//        lisRoles2.add(role2);
//        admin2.setPerfis(lisRoles2);
//        lisRoles3.add(role3);
//        admin3.setPerfis(lisRoles3);
//        
//        HashSet<Usuario> hasUsers = new HashSet<Usuario>();
//        HashSet<Usuario> persisteUsers = new HashSet<Usuario>();
//        hasUsers.addAll(hasUsersA);
//        hasUsers.addAll(hasUsersB);
//        
//        persisteUsers.add(admin1);
////      persisteUsers.add(admin2);
////      persisteUsers.add(admin3);
//     
//        
////        System.out.println("SAVE");
////
////        for (Iterator<Usuario> iterator = persisteUsers.iterator(); iterator.hasNext();) {
////			Usuario usuario = (Usuario) iterator.next();
////		    usuarioRepository.save(usuario);		
////		}
////    
////       usuarioRepository.save(persisteUsers);
//        
////        System.out.println("FIND");
////        for(Usuario find: usuarioRepository.findAll()) {
////        	System.out.println("USUARIO "+find.getNome());
////        	for (Iterator<Role> iterator = find.getPerfis().iterator(); iterator.hasNext();) {
////        		Role role = (Role) iterator.next();
////        		System.out.println("        PROFILE :"+role.getProfile());
////			}
////       	
////        }
