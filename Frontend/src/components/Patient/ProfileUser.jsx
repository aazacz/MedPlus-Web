    import React, { useEffect, useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import axios from 'axios';
    import { useSelector, useDispatch } from 'react-redux';
    import { BiUpload } from 'react-icons/bi';
    import defaultImage from '../../assets/defaultImage.png';
    import {updateUserData} from '../../Redux/userSlice'
    function ProfileUser() {
    
    
      function getCookieValue(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Check if this is the cookie we're looking for
          if (cookie.startsWith(name + '=')) {
            // Return the cookie value
            return cookie.substring(name.length + 1);
          }
        }
        // Return null if the cookie is not found
        return null;
      }


      const user = useSelector(state=>state.login)
    console.log(user);
  

      useEffect(()=>{
        const userAuthCookieValue = getCookieValue("user_auth_cookie_state");
      if (userAuthCookieValue) {
        // You have the value of the "user_auth_cookie" cookie
        console.log("userAuthCookieValue");
        console.log(userAuthCookieValue);
        const encodedValue = userAuthCookieValue;
        const decodedValue = decodeURIComponent(encodedValue); 
        const parsedValue = JSON.parse(decodedValue); 
        const parsedEmail = parsedValue.email 

        console.log(parsedValue.email);

        axios.get(`http://localhost:6002/getUser?data=${parsedEmail}`).then((res) => {
          console.log(res);
          console.log(res.data);
          setValues({
            name: res.data.name ,
            email: res.data.email ,
            houseName: res.data.houseName ,
            city: res.data.city ,
            district: res.data.district,
            state: res.data.state ,
            pincode: res.data.pincode ,
            mobile: res.data.mobile,
            phone: res.data.phone,
            image: res.data.image,
          });
          
          console.log("user.image"+user.image);
          console.log("res.data.image"+res.data.image);
          console.log("values.image"+values.image);

        })


      } else {
      
        console.log("Cookie not found");
      }
      },[])

      const [values, setValues] = useState({
        name: user.name,
        email: user.email,
        houseName: user.houseName,
        city: user.city,
        district: user.district,
        state: user.state,
        pincode: user.pincode,
        mobile: user.mobile,
        phone: user.phone,
        image: user.image, 
      });

      const [error, setError] = useState('');
      const navigate = useNavigate();
      const dispatch = useDispatch();

      const HandleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();

        formdata.append('name', values.name);
        formdata.append('email', values.email);
        formdata.append('houseName', values.houseName);
        formdata.append('city', values.city);
        formdata.append('district', values.district);
        formdata.append('state', values.state);
        formdata.append('pincode', values.pincode);
        formdata.append('mobile', values.mobile);
        formdata.append('phone', values.phone);
        formdata.append("image",values.image)
            

        axios.post('http://localhost:6002/updateProfile', formdata)
          .then((res) => {
            console.log("Profile Uopdated");
            const userData = {
              name: res.data.name,
              email: res.data.email,
              houseName: res.data.houseName,
              city: res.data.city,
              district: res.data.district,
              state: res.data.state,
              pincode: res.data.pincode,
              mobile: res.data.mobile,
              phone: res.data.phone,
              image: res.data.image,
            };
            dispatch(updateUserData(userData));
            navigate('/UserDashboard/Profile');
          }).catch((err) => console.log(err));
      };

      return (
        <>
          <form  onSubmit={HandleSubmit} action=''>
          <div id='parentDiv' className='flex flex-col items-center w-3/4 h-[660px]'>
            <h1 className='text-2xl font-bold mb-4'>Profile</h1>
            {error && <div style={{ color: 'red' }}>{error}</div>}

            <div className='w-full h-auto flex pl-[130px]'>
              <div className='flex flex-col w-[200px] height-[300px] items-center'>
              <img 
                 src={`/${values.image}`}
                                  className=' shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-full w-[100px] h-[100px]'
                  />

                
                <label htmlFor='inputGroupFile01'>
                  <div className='flex'>
                    <div className='flex'>
                      <span className='text-xl flex'> 
                        <BiUpload /> <span className='text-xs'>Change Photo </span>{' '}
                      </span>
                      <input
                        type='file'
                        id='inputGroupFile01'
                        className='hidden'
                        onChange={(e) => setValues({ ...values, image: e.target.files[0] })}
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className='w-3/4 flex '>
              <div className='pt-6 flex-1'>
                <div className='ml-7 flex flex-row items-start justify-between'>
                  <div className='flex flex-col items-start'>
                    <label htmlFor='Name'>Name</label>
                    <input
                      className='rounded-sm h-[30px] border-[1px] w-[280px] p-2'
                      autoComplete='true'
                      onChange={(e) => setValues({ ...values, name: e.target.value })}
                      type='text'
                      name='Name'
                      placeholder={values.name}
                      defaultValue={values.name}
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <label htmlFor='Email'>Email</label>
                    <input
                    className='rounded-sm h-[30px] border-[1px] w-[280px] p-2'
                      autoComplete='true'
                      onChange={(e) => setValues({ ...values, email: e.target.value })}
                      type='Email'
                      name='Email'
                      id='Email'
                      placeholder={values.email}
                      defaultValue={values.email}
                    />
                  </div>
                </div>

                <div className='ml-7 mt-5 flex flex-row items-start justify-between'>
                  <div className='flex flex-col items-start'>
                    <label htmlFor='HouseName'>House Name/No</label>
                    <input
                     className='rounded-sm h-[30px] border-[1px] w-[280px] p-2'
                      autoComplete='true'
                      onChange={(e) => setValues({ ...values, houseName: e.target.value })}
                      type='text'
                      name='HouseName'
                      placeholder={values.houseName}
                      defaultValue={values.houseName}
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <label htmlFor='City'>City</label>
                    <input
                     className='rounded-sm h-[30px] border-[1px] w-[280px] p-2'
                      autoComplete='true'
                      onChange={(e) => setValues({ ...values, city: e.target.value })}
                      type='text'
                      name='City'
                      id='City'
                      placeholder={values.city}
                      defaultValue={values.city}
                    />
                  </div>
                </div>

                <div className='ml-7 mt-5 flex flex-row items-start justify-between'>
                  <div className='flex flex-col items-start'>
                    <label htmlFor='District'>District</label>
                    <input
                     className='rounded-sm h-[30px] border-[1px] w-[280px] p-2'
                      autoComplete='true'
                      onChange={(e) => setValues({ ...values, district: e.target.value })}
                      type='text'
                      name='District'
                      id='District'
                      placeholder={values.district}
                      defaultValue={values.district}
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <label htmlFor='State'>State</label>
                    <input
                     className='rounded-sm h-[30px] border-[1px] w-[280px] p-2'
                      autoComplete='true'
                      onChange={(e) => setValues({ ...values, state: e.target.value })}
                      type='text'
                      name='State'
                      id='State'
                      placeholder={values.state}
                      defaultValue={values.state}
                    />
                  </div>
                </div>

                <div className='ml-7 mt-5 flex flex-row items-start justify-between'>
                  <div className='flex flex-col items-start'>
                    <label htmlFor='Pincode'>Pincode</label>
                    <input
                    className='rounded-sm h-[30px] border-[1px] w-[280px] p-2'
                      autoComplete='true'
                      onChange={(e) => setValues({ ...values, pincode: e.target.value })}
                      type='text'
                      name='Pincode'
                      id='Pincode'
                      placeholder={values.pincode}
                      defaultValue={values.pincode}
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <label htmlFor='Mobile'>Mobile</label>
                    <input
                      className='rounded-sm h-[30px] border-[1px] w-[280px] p-2'
                      autoComplete='true'
                      onChange={(e) => setValues({ ...values, mobile: e.target.value })}
                      type='text'
                      name='Mobile'
                      id='Mobile'
                      placeholder={values.mobile}
                      defaultValue={values.mobile}
                    />
                  </div>
                </div>.

                <div className='ml-7  flex flex-row items-start justify-between'>
                  <div className='flex flex-col items-start'>
                    <label htmlFor='Phone'>Phone</label>
                    <input
                    className='rounded-sm h-[30px] border-[1px] w-[280px] p-2'
                      autoComplete='true'
                      onChange={(e) => setValues({ ...values, phone: e.target.value })}
                      type='text'
                      name='Phone'
                      id='Phone'
                      placeholder={values.phone}
                      defaultValue={values.phone}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-row-reverse px-[200px] w-full'>
            
                <div>
                  <div className='flex'></div>
                  <div className='flex'></div>
                </div>
                <div className='row flex'>
               
               
                  
<button type='submit'   className='Loginlink  bg-lightgreen2 text-white px-4 py-2 rounded-md hover:bg-blue-600' >
                      Update       </button>
                  
                </div>
            </div>
          </div>
              </form>
        </>
      );
    }

    export default ProfileUser;
