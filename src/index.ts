import { createConnection, getRepository } from 'typeorm'
import { UserEntity } from './entities/user.entity'
import inquirer from 'inquirer'

const menu = () => {
  setTimeout(setup, 1000)
}

const questions = [
  {
    type: 'list',
    name: 'choice1',
    message: 'Make a choice',
    choices: ['View All Members', 'View Single Member', 'Verify Member', 'Unverify Member', 'View All Unverified Members']
  },
  {
    type: 'input',
    name: 'userId',
    message: 'Enter member Id',
  }

]

const setup = async () => {
  inquirer.prompt([questions[0]]).then(async (answers) => {
    if (answers.choice1 === 'View All Members') {
      const users = await getRepository(UserEntity).find()
      console.log(users)
      menu()
    }
    if (answers.choice1 === 'View Single Member') {
      inquirer.prompt([questions[1]]).then(async (answer) => {
        const user = await getRepository(UserEntity).findOne({ where: { id: answer.userId } })
        console.log(user)
        menu()
      })
    }
    if (answers.choice1 === 'Verify Member') {
      inquirer.prompt([questions[1]]).then(async (answer) => {
        const findUser = await getRepository(UserEntity).findOne({ where: { id: answer.userId } })
        const updatedUser = {
          ...findUser,
          isVerified: true
        }
        await getRepository(UserEntity).update(answer.userId, updatedUser)

        const user = await getRepository(UserEntity).findOne({ where: { id: answer.userId } })
        console.log(user, 'User has been verified')
        menu()
      })
    }

    if (answers.choice1 === 'Unverify Member') {
      inquirer.prompt([questions[1]]).then(async (answer) => {
        const findUser = await getRepository(UserEntity).findOne({ where: { id: answer.userId } })
        const updatedUser = {
          ...findUser,
          isVerified: false
        }
        await getRepository(UserEntity).update(answer.userId, updatedUser)

        const user = await getRepository(UserEntity).findOne({ where: { id: answer.userId } })
        console.log(user, 'User has been unverified ')
        menu()
      })
    }

    if (answers.choice1 === 'View All Unverified Members') {
      inquirer.prompt([questions[2]]).then(async (answer) => {
        const users = await getRepository(UserEntity).find({ where: { isVerified: false } })
        console.log(users)
        menu()
      })
    }
  })
}

createConnection()
  .then(async (connection) => {
    console.log('database connected')
    // const users = await getRepository(UserEntity).find()
    setup()
  })