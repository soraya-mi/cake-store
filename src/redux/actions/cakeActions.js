import { BUY_CAKE } from '../types/cakeTypes'

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}
