export default function EditProfile({ match }) {
    const classes = useStyles()
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        seller: false,
        redirectToProfile: false,
        error: ''
    })
    const jwt = auth.isAuthenticated()
    useEffect(() => {
      const abortController = new AbortController()
      const signal = abortController.signal
  
      read({
        userId: match.params.userId
      }, {t: jwt.token}, signal).then((data) => {
        if (data && data.error) {
          setValues({...values, error: data.error})
        } else {
          setValues({...values, name: data.name, email: data.email, seller: data.seller})
        }
      })
      return function cleanup(){
        abortController.abort()
      }
  
    }, [match.params.userId])
  
    const clickSubmit = () => {
      const user = {
        name: values.name || undefined,
        email: values.email || undefined,
        password: values.password || undefined,
        seller: values.seller || undefined
      }
      update({
        userId: match.params.userId
      }, {
        t: jwt.token
      }, user).then((data) => {
        if (data && data.error) {
          setValues({...values, error: data.error})
        } else {
          auth.updateUser(data, ()=>{
            setValues({...values, userId: data._id, redirectToProfile: true})
          })
        }
      })
    }
    const handleChange = name => event => {
      setValues({...values, [name]: event.target.value})
    }
    const handleCheck = (event, checked) => {
      setValues({...values, 'seller': checked})
    }
  
    if (values.redirectToProfile) {
      return (<Redirect to={'/user/' + values.userId}/>)
    }
}