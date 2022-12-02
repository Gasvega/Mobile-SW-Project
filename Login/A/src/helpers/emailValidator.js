// 이메일 자리가 비어있다.
// 유효한 이메일 주소가 필요하다.
 
export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email can't be empty."
  if (!re.test(email)) return 'Ooops! We need a valid email address.'
  return ''
}
