import './profile.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../service/apiClient';
import Form from '../../components/form';
import TextInput from '../../components/form/textInput';

const Profile = ({ readOnly }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const initials = user ? `${user.firstName[0]}${user.lastName[0]}` : '';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser(id);
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const submit = (e) => {
    e.preventDefault();
    console.log('Submit');
  };

  const onChange = (e) => {
    e.preventDefault();
    console.log('Change');
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-edit-section">
        <div className="profile-header">
          <div className="profile-icon">
            <p>{initials}</p>
          </div>
          <label className="profile-name">
            <p className="profile-name-header">{`${user.firstName} ${user.lastName}`}</p>
            <p>{user.role === 'STUDENT' ? 'Student' : 'Teacher'}</p>
          </label>
        </div>

        <div className="profile-body">
          <section>
            <Form className="profile-body-forms" onSubmit={submit}>
              <section>
                <h3>Basic Info</h3>
                <div className="profile-smaller-icon">
                  <p>{initials}</p>
                </div>
                <TextInput
                  value={user.firstName}
                  onChange={onChange}
                  name="firstName"
                  label="First Name"
                  readOnly={readOnly}
                />
                <TextInput
                  value={user.lastName}
                  onChange={onChange}
                  name="lastName"
                  label="Last Name"
                  readOnly={readOnly}
                />
                <TextInput
                  value={user.email.split('@')[0]}
                  onChange={onChange}
                  name="username"
                  label="Username"
                  readOnly={readOnly}
                />
                <TextInput
                  value={user.githubUrl}
                  onChange={onChange}
                  name="githubUrl"
                  label="GitHub Username"
                  readOnly={readOnly}
                />
              </section>
              <section>
                <h3>Contact Info</h3>
                <TextInput
                  value={user.email}
                  onChange={onChange}
                  name="email"
                  label="Email"
                  readOnly={readOnly}
                />
                <TextInput
                  value="N/A"
                  onChange={onChange}
                  name="mobile"
                  label="Mobile"
                  readOnly={readOnly}
                />
                <TextInput
                  value="********"
                  onChange={onChange}
                  name="password"
                  label="Password"
                  readOnly={readOnly}
                />
              </section>
              <section>
                <h3>Bio</h3>
                <TextInput
                  value={user.biography || ''}
                  onChange={onChange}
                  name="biography"
                  label="Biography"
                  readOnly={readOnly}
                />
              </section>
              <section>
                <h3>{user.role === 'STUDENT' ? 'Training Info' : 'Professional Info'}</h3>
                <TextInput
                  value={user.role}
                  onChange={onChange}
                  name="role"
                  label="Role"
                  readOnly={readOnly}
                />
                <TextInput
                  value="N/A"
                  onChange={onChange}
                  name="specialism"
                  label="Specialism"
                  readOnly={readOnly}
                />
                {user.role === 'STUDENT' ? (
                  <>
                    <TextInput
                      value="N/A"
                      onChange={onChange}
                      name="cohortStartDate"
                      label="Cohort Start Date"
                      readOnly={readOnly}
                    />
                    <TextInput
                      value="N/A"
                      onChange={onChange}
                      name="cohortEndDate"
                      label="Cohort End Date"
                      readOnly={readOnly}
                    />
                  </>
                ) : (
                  <TextInput
                    value="N/A"
                    onChange={onChange}
                    name="jobTitle"
                    label="Job Title"
                    readOnly={readOnly}
                  />
                )}
              </section>
            </Form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
