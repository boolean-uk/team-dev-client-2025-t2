import './editProfile.css';
import Form from '../../components/form';
import TextInput from '../../components/form/textInput';
const EditProfile = () => {
  console.log('THIS IS THE EDIT PAGE');
  const initials = 'ES';

  const submit = () => {
    console.log('Submit');
  };

  const onChange = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile-edit-section">
          <div className="profile-header">
            <div className="profile-icon">
              <p>{initials}</p>
            </div>
            <label className="profile-name">
              <p className="profile-name-header">Erlend Skutlaberg</p>
              <p>Certified genius</p>
            </label>
          </div>

          <div className="profile-body">
            <section>
              <Form className="profile-body-forms" onSubmit={submit}>
                <section>
                  <h3>Basic info</h3>
                  <div className="profile-smaller-icon">
                    <p>{initials}</p>
                  </div>
                  <TextInput value={''} onChange={onChange} name="email" label={'Email *'} />
                  <TextInput value={''} onChange={onChange} name="email" label={'Email *'} />
                  <TextInput value={''} onChange={onChange} name="email" label={'Email *'} />
                </section>
                <section>
                  <h3>Training Info</h3>
                  <TextInput value={''} onChange={onChange} name="email" label={'Email *'} />
                  <TextInput value={''} onChange={onChange} name="email" label={'Email *'} />
                  <TextInput value={''} onChange={onChange} name="email" label={'Email *'} />
                </section>
              </Form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
