# Testes iOS

Testes automatizados de login, navegação, carrinho e pagamento em um aplicativo iOS.

## Executar

```bash
npm install
npm test
```

Os testes usam WebdriverIO, Appium e Sauce Labs.

## GitHub Actions e Sauce Labs

A integração contínua fica na branch `ci`, no workflow
`.github/workflows/sauce-labs.yml`. O workflow executa os testes em um
dispositivo iOS hospedado no Sauce Labs após um push ou pull request para essa
branch.

Configure estes secrets em `Settings > Secrets and variables > Actions`:

- `SAUCE_USERNAME`: usuário do Sauce Labs
- `SAUCE_ACCESS_KEY`: chave de acesso do Sauce Labs
- `SAUCE_APP`: identificador do app enviado ao Sauce Labs, por exemplo
	`sauce-storage:LojaEBAC.ipa`
- `SAUCE_DEVICE_NAME`: nome do dispositivo, por exemplo `iPhone 14 Simulator`
- `SAUCE_PLATFORM_VERSION`: versão do iOS, por exemplo `16.0`

O app precisa ser enviado previamente ao Sauce Labs. O vídeo da execução fica
disponível na sessão correspondente ao build `ebac-exerc30-<número da execução>`
no dashboard do Sauce Labs.