import json
import os
from botocore.vendored import requests

TELE_TOKEN= os.environ['Token_Inquiry']
URL = "https://api.telegram.org/bot{}/".format(TELE_TOKEN)

def send_message(text, chat_id):
    # final_text = "You said: " + text
    final_text = text
    url = URL + "sendMessage?text={}&chat_id={}".format(final_text, chat_id)
    requests.get(url)

def lambda_handler(event, context):
    chat_id = os.environ['Chat_id_Ryan']
    for record in event['Records']:
        if record['eventName'] == 'INSERT':
            objReply = record['dynamodb']['NewImage']
            reply = "Name: {}\nCountry: {}\nRegion: {}\nCity: {}".format(objReply['name']['S'], objReply['country_name']['S'], objReply['region']['S'], objReply['city']['S'])
            send_message(reply, chat_id)
        else:
            reply = 'An Event happened in DynamoDB but is not an INSERT! Event is: {}.'.format(record['eventName'])
            send_message(reply, chat_id)

    return {
        'statusCode': 200,
        'body': json.dumps(reply),
    }


    # for record in event['Records']:
    #     print(record['eventID'])
    #     print(record['eventName'])
    #     print('DynamoDB Record: {}'.format(record['dynamodb']))

    # return {
    #     'statusCode': 200,
    #     # 'body': json.dumps('Successfully processed {} records.'.format(event['Records']['length']))
    #     'body': json.dumps('Successfully processed')
    # }
    
