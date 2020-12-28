export default {
  resolve(...args: string[]): string {
    return args.join('*')
  },
}
