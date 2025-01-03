export interface ChatSession {
  session_id: string;
  message: string;
}

export interface ChatResponse {
  response: string;
}

const API_BASE_URL = 'https://llm-webhook-1028888047283.us-central1.run.app';

export async function initializeChat(agent_name: string, agent_id: string): Promise<ChatSession> {
  const response = await fetch(`${API_BASE_URL}/initial_message`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
      agent_name, 
      agent_id,
      user_name: 'temp',
      user_email: 'temp@smaartbotics.com'
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to initialize chat session');
  }

  return response.json();
}

export async function sendMessage(
  query: string,
  session_id: string,
  agent_id: string
): Promise<ChatResponse> {
  const formData = new FormData();
  formData.append('query', query);
  formData.append('agent_id', agent_id);

  const response = await fetch(`${API_BASE_URL}/chat_agent_response`, {
    method: 'POST',
    headers: {
      'Session-Id': session_id,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
}

export async function sendAudioMessage(
  audioBlob: Blob,
  session_id: string,
  agent_id: string
): Promise<ChatResponse> {
  const formData = new FormData();
  formData.append('audio_file', audioBlob, 'audio.wav');
  formData.append('agent_id', agent_id);

  const response = await fetch(`${API_BASE_URL}/chat_agent_response`, {
    method: 'POST',
    headers: {
      'Session-Id': session_id,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to send audio message');
  }

  return response.json();
}