<template>
  <form action="">
    <label for="nome">Nome</label>
    <input type="text" id="nome" name="nome" v-model="nome" />

    <label for="nome">Email</label>
    <input type="email" id="email" name="email" v-model="email" />

    <label for="nome">Senha</label>
    <input type="password" id="senha" name="senha" v-model="senha" />

    <label for="nome">Cep</label>
    <input type="text" id="cep" name="cep" v-model="cep" />

    <label for="nome">Rua</label>
    <input type="text" id="rua" name="rua" v-model="rua" />

    <label for="nome">Numero</label>
    <input type="text" id="numero" name="numero" v-model="numero" />

    <label for="nome">Bairro</label>
    <input type="text" id="bairro" name="bairro" v-model="bairro" />

    <label for="nome">Cidade</label>
    <input type="text" id="cidade" name="cidade" v-model="cidade" />

    <label for="nome">Estado</label>
    <input type="text" id="estado" name="estado" v-model="estado" />
    <div class="button">
      <slot> </slot>
    </div>
  </form>
</template>

<script>
export default {
  name: 'UsuarioForm',

  data() {
    return {
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
    }
  }
}
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>