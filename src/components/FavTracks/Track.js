import React from 'react';
import { Col, Card, Button, Form, Input, Radio } from 'antd';
import { connect } from 'react-redux';
import { deleteTrack, editTrack } from '../../actions';

const FormItem = Form.Item;

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      artist: '',
    };
  }

  handleChange = (e) => {
    const newTrack = {};
    newTrack[e.target.name] = e.target.value;
    this.setState(newTrack);
  }

  showEditForm(track) {
    this.setState({
      ...track,
    });
  }
  render() {
    const { id, title, artist } = this.state;
    const { track, deleteTrack, editTrack } = this.props;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    return (
      <Col span={6}>
        <Card style={{ width: 240, padding: 0 }}>
          { track.id === id ?
            (
              <Form layout="horizontal">
                <FormItem
                  label="Artist"
                  {...formItemLayout}
                >
                  <Input
                    placeholder="input placeholder"
                    value={artist}
                    name="artist"
                    onChange={this.handleChange}
                  />
                </FormItem>
                <FormItem
                  label="Title"
                  {...formItemLayout}
                >
                  <Input
                    placeholder="input placeholder"
                    value={title}
                    name="title"
                    onChange={this.handleChange}
                  />
                </FormItem>
                <Button
                  onClick={() => this.setState({ id: 0, title: '', artist: '' })}
                  shape="circle"
                  type="danger"
                  icon="close"
                />
                <Button
                  onClick={() => {
                    editTrack({ id, title, artist });
                    this.setState({ id: 0, title: '', artist: '' });
                  }}
                  shape="circle"
                  type="info"
                  icon="check"
                />
              </Form>
            )
            :
            (
              <div>
                <p>Title: <b>{track.title}</b></p>
                <p>Artist: {track.artist}</p>
                <a rel="noopener noreferrer" target="_blank" href={`https://play.spotify.com/track/${track.id}`}> Spotify Link </a>
                <br />
                <br />
                <Button
                  onClick={() => deleteTrack(track.id)}
                  shape="circle"
                  type="danger"
                  icon="delete"
                />
                <Button
                  onClick={() => this.showEditForm(track)}
                  shape="circle"
                  type="info"
                  icon="edit"
                />
              </div>
            )}

        </Card>
        <br />
        <br />
      </Col>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTrack: trackId => dispatch(deleteTrack(trackId)),
  editTrack: track => dispatch(editTrack(track)),
});

export default connect(null, mapDispatchToProps)(Track);
