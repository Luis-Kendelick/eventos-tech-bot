'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chat = new Telegram.Telegram('371045027:AAFg6dZiZxJr36qhABQKbgNXsnv7VxkOuiE')

class EventsController extends TelegramBaseController {
  allEvents(scope) {
    scope.sendMessage(`QConSP - 24-25-26/04/2017 - qconsp.com\nFrontInSampa - 01/07/2017 - frontinsampa.com.br\nAgileBrazil - 13-14-15/09/2017 - agilebrazil.com/2017`)
  }

  get routes() {
    return {
      'allEvents': 'allEvents'
    }
  }
}

chat.router
    .when(
      new TextCommand('/allevents', 'allEvents'), new EventsController()
    )
