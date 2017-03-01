import Vue from 'vue'
import VueI18n from 'vue-i18n'

// ready translated locales
export const locales = {
    en: {
        message: {
            homePage: 'Home Page',
            groups: 'Groups',
            agents: 'Agents'
        },
        changePassword: {
            userName: 'User Name',
            oldPassword: 'Old Password',
            newPassword: 'New Pаssword',
            changePassword: 'Change Password'
        }
    },
    ru: {
        message: {
            homePage: 'Домашняя страница',
            groups: 'Группы',
            agents: 'Агенты'
        },
        changePassword: {
            userName: 'Пользователь',
            oldPassword: 'Старый Пароль',
            newPassword: 'Новый пароль',
            changePassword: 'Изменить пароль'
        }
    }
}
