import './profile.css';
import { useContext } from 'react';
import Form from '../form';
import TextInput from '../form/textInput';

const Profile = ({ readOnly, UserContext }) => {
  if (!UserContext) {
    throw new Error('UserContext is required');
  }

  const context = useContext(UserContext);
  const { user, updatedUser, onChange, submit } = context;
  const initials = user ? `${user.firstName[0]}${user.lastName[0]}` : '';

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>{readOnly ? 'View Profile' : 'Edit Profile'}</h1>
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
                  value={updatedUser ? updatedUser.firstName || user.firstName : user.firstName}
                  onChange={onChange}
                  name="firstName"
                  label="First Name"
                  readOnly={readOnly}
                />
                <TextInput
                  value={updatedUser ? updatedUser.lastName || user.lastName : user.lastName}
                  onChange={onChange}
                  name="lastName"
                  label="Last Name"
                  readOnly={readOnly}
                />
                <TextInput
                  value={
                    updatedUser
                      ? updatedUser.username || user.email.split('@')[0]
                      : user.email.split('@')[0]
                  }
                  onChange={onChange}
                  name="username"
                  label="Username"
                  readOnly={readOnly}
                />
                <TextInput
                  value={updatedUser ? updatedUser.githubUrl || user.githubUrl : user.githubUrl}
                  onChange={onChange}
                  name="githubUrl"
                  label="GitHub Username"
                  readOnly={readOnly}
                />
              </section>

              <section>
                <h3>{user.role === 'STUDENT' ? 'Training Info' : 'Professional Info'}</h3>
                <TextInput
                  value={updatedUser ? updatedUser.role || user.role : user.role}
                  onChange={onChange}
                  name="role"
                  label="Role"
                  readOnly={readOnly}
                />
                <TextInput
                  value={updatedUser ? updatedUser.specialism || 'N/A' : 'N/A'}
                  onChange={onChange}
                  name="specialism"
                  label="Specialism"
                  readOnly={readOnly}
                />
                {user.role === 'STUDENT' ? (
                  <>
                    <TextInput
                      value={updatedUser ? updatedUser.cohortStartDate || 'N/A' : 'N/A'}
                      onChange={onChange}
                      name="cohortStartDate"
                      label="Cohort Start Date"
                      readOnly={readOnly}
                    />
                    <TextInput
                      value={updatedUser ? updatedUser.cohortEndDate || 'N/A' : 'N/A'}
                      onChange={onChange}
                      name="cohortEndDate"
                      label="Cohort End Date"
                      readOnly={readOnly}
                    />
                  </>
                ) : (
                  <TextInput
                    value={updatedUser ? updatedUser.jobTitle || 'N/A' : 'N/A'}
                    onChange={onChange}
                    name="jobTitle"
                    label="Job Title"
                    readOnly={readOnly}
                  />
                )}
              </section>
              <section>
                <h3>Contact Info</h3>
                <TextInput
                  value={updatedUser ? updatedUser.email || user.email : user.email}
                  onChange={onChange}
                  name="email"
                  label="Email"
                  readOnly={readOnly}
                />
                <TextInput
                  value={updatedUser ? updatedUser.mobile || 'N/A' : 'N/A'}
                  onChange={onChange}
                  name="mobile"
                  label="Mobile"
                  readOnly={readOnly}
                />
                <TextInput
                  value={updatedUser ? updatedUser.password || '********' : '********'}
                  onChange={onChange}
                  name="password"
                  label="Password"
                  readOnly={readOnly}
                />
              </section>
              <section>
                <h3>Bio</h3>
                <textarea
                  value={
                    updatedUser
                      ? updatedUser.biography || user.biography || ''
                      : user.biography || ''
                  }
                  onChange={onChange}
                  name="biography"
                  label="Biography"
                  readOnly={readOnly}
                />
              </section>
            </Form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
