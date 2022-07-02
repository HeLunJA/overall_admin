import { instance } from '../index'
import '@/mock/index.ts'
export function getGeneralData() {
  return instance.get('/mockGetGeneralData')
}

export function getTableData(data) {
  return instance.post('/mockGetTableData', data)
}
