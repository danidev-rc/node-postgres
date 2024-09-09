import { Router } from 'express'

const router = Router()

router.get('/users', (req, res) => {
  res.send('Obteniendo usuarios')
})

router.get('/users/:id', (req, res) => {
  const { id } = req.params
  res.send('Obteniendo un usuario con id ' + id)
})

router.post('/users', (req, res) => {
  res.send('Creando usuarios')
})

router.delete('/users/:id', (req, res) => {
  res.send('Eliminando un usuario')
})

router.put('/users/:id', (req, res) => {
  const { id } = req.params
  res.send('Editando un usuario ' + id)
})

export default router
