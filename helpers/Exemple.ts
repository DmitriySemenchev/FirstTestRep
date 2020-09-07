import { Selector, t } from 'testcafe'
import { ClientFunction } from 'testcafe'

  /*
    Варианты создания клиентской функции.
    После => может быть передан options аргумент
   */
   export const getCurentUrl = ClientFunction(() => window.location.href)
   
   export const getCurentUrl2 = ClientFunction(() => {
       let curentUrl2 = window.location.href
        return curentUrl2
   })
    
  
   


    
    
