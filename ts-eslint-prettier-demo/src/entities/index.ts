export interface Vm {
  id: string
  name: string
  description?: string
  template: {
    id: string
    href?: string
  }
}

export interface Host {
  id: string
}
